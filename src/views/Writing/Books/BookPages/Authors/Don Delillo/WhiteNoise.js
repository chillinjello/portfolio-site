import BookReviewTemplate from "../../BookReviewTemplate.js";

const DonDilillo_WhiteNoise = (props) => {
    const title = "Don Dilillo - White Noise (1985)";
    const date = "12-1-2021";
    const content = (
        <p>
            Don Delillo’s White Noise seems to be many things at once. It is first a novel but seems in reality to be much less and more than a novel. The story revolves around a sort of stereotypical American family where the parents are middle aged and remarried a number of times leaving children from all sorts of ages and marriages roaming about their house and their previous spouses’. The main character, presented primarily in the first person, is a professor in their small town of Hitler studies. This career and its various characters it attracts is a magnet for humor which Delillo seems to effortlessly dispense without detracting or cutting into the serious overarching themes of the book. 
            <br/>
            For the first half of the book we’re learning about the family and getting introduced to new characters without any real sense of direction. All the characters are not particularly sad relative to what a dramatic novel might typically include, but neither are they happy; their lives seem out of control and somehow hopeless in spite of their lack of social or financial woes. As if deus ex machina, there is an event in the middle of the book where toxic waste is let out in a train accident blocks away from their house. The main character is exposed to the waste and assumed poisoned though we never get a true diagnosis. The rest of the book plunges into the fears which the first half only alludes to. Both husband and wife are horribly scared of death and desperately trying to cope.
            <br/>
            Here, and in passages throughout the book, though less regularly, Delillo becomes a street preacher for apocalypse. Not apocalypse in a material, calculable sense, but the nature of what its like and means for someone to slip off the edge into oblivion, or at least be confronted with the certainty that they will. Where the plot seems to be lacking here, taking an almost sitcom-y tone which alone would leave the reader wanting, the digressions soar. Delillo’s prose is beautiful, making it clear that his answer or coping mechanism to death's inherent madness is through the pursuit of beautiful phrases and words. He follows words mindlessly and without initial meaning but in the end spins philosophical tales and anecdotes which continually shock with profundity until the end of the book. Once it’s all said and done, the book feels complete like life, and, as Delillo’s protagonist describes, life because of death seems to be broken somehow.
        </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}

export default DonDilillo_WhiteNoise;