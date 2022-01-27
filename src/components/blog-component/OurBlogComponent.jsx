import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const OurBlogComponent = () => {

    const [blogData, setBlogData] = React.useState([]);


    React.useEffect(() => {
        axios.get('data.json').then(res => {
            setBlogData(res.data.ourBlogsData)
        })
    },[]);

    const blogLisgt = blogData.map(blogItem => {
        return(
            <div className="col-md-6 col-12 mb-5" key={blogItem.id}>
                <img className='d-block w-100' src={blogItem.image} alt='' />
                <h3 className='my-3'>{blogItem.title}</h3>
                <p className='text-muted'>{blogItem.text}</p>
                <Link to="#" className='fw-bold text-capitalize'>read more</Link>
            </div>
        )
    })



    return (
        <section className="blog-sec bg-white pt-5 mt-5">
            <div className="container">
                <h2 className='text-center text-capitalize mb-5'>our blogs</h2>
                <div className="row">
                    {blogLisgt}
                </div>
            </div>
        </section>
    )
}

export default OurBlogComponent
