

const Home = () => {

    const handleClick = () => {
        console.log("Hello World")
    }


    return ( 
        <div className="home">
            <h2>HOME PAGE</h2>
            <button onClick={handleClick}>Click Me</button>
            <button>Click ME again</button>
        </div>
     );
}
 
export default Home;