const Bloglist = ({blogs, title, handleDelete}) => {

    return (
        <div className="Bloglist">
            <h2> {title} </h2>
            {
                blogs.map(blog => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author} </p>
                        <text> {blog.body} </text>
                        <br />
                        <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Bloglist;