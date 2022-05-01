import "./DefaultWritingPage.css";
import React from "react";

const DefaultWritingPage = (props) => {
    return (
        <div style={{margin: "0px", color: "ffcf00", paddingTop: "7%", paddingRight: "20%", paddingLeft: "20%"}}>
            <div className="c" style={{maxWidth:"50em"}}>
                {props.content}
            </div>
        </div>
    );
}
export default DefaultWritingPage;