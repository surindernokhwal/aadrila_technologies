import { BlogShape } from "../../assets/Images/Images";

const BlogCard = ({blogTitle, blogDate, blogText}) =>{
    return(
        <>
            <div className="blog-card-outer">
                <div className="blog-card">
                    <h4>{blogTitle}</h4>
                    <small>{blogDate}</small>
                    <p>{blogText}</p>
                </div>
                <div className="blog-shape">
                    <img src={BlogShape} alt="BlogShape" />
                </div>
            </div>
        </>
    )
}

export default BlogCard;