import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author};

      setIsPending(true);

      fetch('http://localhost:8080/blogs',{
          method: 'POST',
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(blog)
      }).then(() => {
          setIsPending(false);
          console.log('New blog added');
          history.push("/");

      });
    }

  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
            <select>
            <option
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >mario</option>
            <option value="yoshi"
                    onChange={(e) => setAuthor(e.target.value)}
            >yoshi</option>
            </select>
            { !isPending && (<button>Add blog</button>)}
            { isPending && <button disabled></button>}
        </form>
    </div>
  )
}

export default Create;