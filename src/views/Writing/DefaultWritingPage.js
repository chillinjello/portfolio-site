const DefaultWritingPage = (props) => {
    return (
        <div style={{margin: "0px", color: "ffcf00", paddingTop: "150px"}}>
            <div className="c" style={{backgroundColor: "rgba(1,1,1,.6)", maxWidth:"50em"}}>
                {props.content}
            </div>
        </div>
    );
}
export default DefaultWritingPage;