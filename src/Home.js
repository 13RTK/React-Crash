import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My website", body: "Tomcat structure", author: "Alex", id: 1 },
        { title: "My notion notes", body: "Comprehensive notes", author: "John", id: 2 },
        { title: "My favor Korean drama in 2023", body: "The glory", author: "Lexi", id: 3 }
    ])

    const [name, setName] = useState("alex");

    const handleDelete = (id) => {
        const newArray = blogs.filter((blog) => blog.id !== id);
        setBlogs(newArray);
    }

    useEffect(() => {
        console.log("Call useEffect");
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <button onClick={() => setName("John")}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;