const Home = () => {
    const handleClick = (e) => {
        console.log("Hello React", e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => handleClick(e)}>Click me</button>
        </div>
    );
}

export default Home;