import React from 'react'

function BlogCard(props) {
    return (
        <div className="blog-card-wrapper">
            <img src={`./images/${props.blogImage}`} alt="Blog Thumbnail" />
            <div className="blog-card-text">
                <p className="author">By {props.blogAuthor}</p>
                <h3>{props.blogTitle}</h3>
                <p className="card-desc">{props.blogDescription}</p>
            </div>
        </div>
    )
}

export default BlogCard
