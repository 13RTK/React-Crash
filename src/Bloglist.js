const Bloglist = ({ blogs, title }) => {

    return (
        <div className="Bloglist">
            <h2> {title} </h2>
            {
                blogs.map(blog => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author} </p>

                        <div className="blog-body">
                            <p>{blog.body}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Bloglist;