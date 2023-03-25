import {useState} from 'react'

const Home = () => {

    //let name = 'ZAHIN'
    const [name, setName] = useState('Zahin');

    const handleClick = () => {
        setName('Fariya');
    }



    return ( 
        <div className="home">
            
            <h2>HOME PAGE</h2>
            <p>{name}</p>

            <button onClick={handleClick}>Click Me</button>

        </div>
     );
}
 
export default Home;