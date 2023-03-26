import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    
    const {data: blogs, isPending, error} = useFetch('http://localhost:3000/blogs')

    return ( 
        <div className="home">
            {isPending && <div> Loading... </div> }
            {blogs && <BlogList blogs={blogs} title="All blogs!"  />}

        </div>
     );
}
 
export default Home;



//  /blogs              GET         fetch all blogs
// /blogs/{id}          GET         Feth a single blog
// /blogs               POST        Add a new blog
// /blogs/{id}          DELETE      Delete a blog