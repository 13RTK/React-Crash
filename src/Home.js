import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data for URL");
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setError(null);
                })
                .catch(e => {
                    setError(e.message);
                    setIsPending(false);
                });

            setIsPending(false);
        }, 1000)
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading......</div>}
            {blogs && <Bloglist blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;