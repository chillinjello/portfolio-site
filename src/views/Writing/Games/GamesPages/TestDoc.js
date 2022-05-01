import DefaultWritingPage from "./../../DefaultWritingPage.js";

const TestDoc = (props) => {
    const testContent = (
        <div>
            <h4>Title</h4>
            <h6>Date</h6>
            <p>
                Content
            </p>
        </div>
    );
    return <DefaultWritingPage content={testContent}/>
}

export default TestDoc;