import React from 'react';
import BlogCard from "./BlogCard";


function Blog() {
    return (
        <div className="blog-wrapper">
            <div className="blog-container">
                <h2>Latest Articles</h2>
                <div className="blog-card-container">
                    <BlogCard blogImage="image-currency.jpg" blogAuthor="Claire Robinson" blogTitle="Receive money in any currency with no fees" blogDescription="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"/>
                    <BlogCard blogImage="image-restaurant.jpg" blogAuthor="Wilson Hutton" blogTitle="Treat yourself without worrying about money" blogDescription="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"/>
                    <BlogCard blogImage="image-plane.jpg" blogAuthor="Wilson Hutton" blogTitle="Take your Easybank card wherever you go" blogDescription="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"/>
                    <BlogCard blogImage="image-confetti.jpg" blogAuthor="Claire Robinson" blogTitle="Our invite-only Beta accounts are now live!" blogDescription="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …"/>
                </div>
            </div>
        </div>
    )
}

export default Blog;