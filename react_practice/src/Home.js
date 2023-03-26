import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id )  
       setBlogs(newBlogs)
    }

    useEffect(()=>{
        setTimeout(() =>{
            fetch('http://localhost:3000/blogs ')   
        .then(res =>{
            if(res.ok){
                return res.json();
            }
        })
        .then((data) =>{
            console.log(data)
            setBlogs(data)
            setIsPending(false)
        })
        .catch((error)=>{
            console.log(error.message)
        })
        },1000)
    }, []);



    return ( 
        <div className="home">
            {isPending && <div> Loading... </div> }
            {blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />}

        </div>
     );
}
 
export default Home;



//  /blogs              GET         fetch all blogs
// /blogs/{id}          GET         Feth a single blog
// /blogs               POST        Add a new blog
// /blogs/{id}          DELETE      Delete a blog