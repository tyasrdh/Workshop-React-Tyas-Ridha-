import React from "react";

const BlogList = props =>{
    return(
        <div style = {style.BlogList}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>{props.author} </p>
        <p>{props.date}</p>
        </div>
    );
}
const style = {
    BlogList: {
        backgroundColor: "#bae2be"
        
    }
    
}

export default BlogList