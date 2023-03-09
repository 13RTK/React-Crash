import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Success added")
            setIsPending(false);
            history.push("/");
        });
    }

    return (
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
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
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Alex">Alex</option>
                    <option value="Sasha">Sasha</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding.......</button>}
            </form>
        </div>
    );
}
export default Create;