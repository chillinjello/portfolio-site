import BookReviewTemplate from "../../BookReviewTemplate.js";

const Marquez_100YearsOfSolitude = (props) => {
    const title = "Gabriel Garcia Marquez - 100 Years Of Solitude (1967)";
    const date = "9-1-2021";
    const content = (
        <div>
            <p>
                Writing this a year after I’ve read 100 Years of Solitude I can’t help but forget some of the myriad details Marquez has filled so completely his history of Columbia, and perhaps Latin America in general. Not in another hundred years will we have a computer with the throughput to allow for it to process all the knowledge that 100 Years of Solitude has to offer. Each page seems to deny logic and make your eyes burst with the sheer amount of information presented. This feat is in many ways only accomplished through Marquez’ crystal clear and beautiful prose which stuns as time, location, and main characters are switched with ease. Single chapters of this book capture what others do in volumes proving that well articulated prose’s ability to convey is a technology of information as well as pleasure, and in this case it’s both.
                <br/>
                The story follows ~100 years of the ​​Buendía family and their establishment of a small rural columbian town and its ups and downs. Each character is often multiple stories in one, wrapped with folklore unending and more tall tales than you’ll know what to do with. It’s been said that Marquez is a straight faced purveyor of lies and it’s his lies which make up the true meat of the book. Each lie seems somehow an abstraction or misconstrued truth that, when viewed through our reading lens, is turned from lie into undeniable truth. It’s hard to tell if Marquez has implanted this notion within us or if it’s always been there.
                <br/>
                This is first and foremost a story about stories. Every genre is presented without absence or much tarde and the progression of time seen throughout seems both a helpful summary for us US citizens and a folk retelling. Reading 100 Years of Solitude is such a book that it makes you wonder if it could have been written about any other time at all. It seems unique and breathtaking in almost every respect and with scale void of previous comparison. It’s an experience all to itself. 
            </p>
        </div>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}

export default Marquez_100YearsOfSolitude;