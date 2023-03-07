import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data from the URL");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setError(null);
                })
                .catch(e => {
                    setError(e.message);
                    setIsPending(false);
                });

            setIsPending(false);

            // Manually stop 1s(do not use at product env)
        }, 1000)
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;