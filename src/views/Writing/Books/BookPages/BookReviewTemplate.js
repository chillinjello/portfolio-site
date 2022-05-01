import React from "react";
import DefaultWritingPage from "./../../DefaultWritingPage.js";
import "./BookReviewTemplate.css";

const BookReviewTemplate = (props) => {
    const bookReviewContent = (
        <div>
            <h4>{props.title}</h4>
            <h6>{props.date}</h6>
            <p>
                {props.content}
            </p>
        </div>
    );
    return <DefaultWritingPage content={bookReviewContent}/>
}

export default BookReviewTemplate;