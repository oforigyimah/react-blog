import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

            setTimeout(() =>{
                (fetch(url, { signal: abortCont.signal }))
                    .then(res => {
                        if (!res.ok){
                            throw Error('could not fetch the data that resource');
                        }
                        return res.json()
                    })
                    .then((data) => {
                        setData(data);
                        setError(null);
                        setIsPending(false);
                    })
                    .catch((e) => {
                        if (e){
                            console.log('Null Error')
                        } else if (error.name === "AbortError"){
                            console.log('fetch aborted');
                        } else {
                            setIsPending(false);
                            setError(e.message);
                        }
                    })
            }, 1000);
            return () => abortCont.abort();
        },
        [url]);
    return {
        data,
        isPending,
        error
    }
}

export default useFetch;