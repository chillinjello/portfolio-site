import BookReviewTemplate from "../../BookReviewTemplate.js";

const Marquez_LoveInTheTimeOfCholera = (props) => {
    const title = "Gabriel Garcia Marquez - Love in the Time of Cholera (1985)";
    const date = "5-8-2022";
    const content = (
        <p>
            After reading 100 Years of Solitude and being blasted with its page after page of livid detail, I didn’t immediately seek out my next Marquez book. But I figure his name did permanently etched itself onto some short list in my mind, because less than a year later I picked up Love in the Time of Cholera with the expectation that I, sooner or later, would get the impulse to read through it. And sooner rather than later I, through what may be described as the literary equivalent of discipleship, proposed that me and a friend read through the book together, on the grounds that he’d never read Marquez and that this would be a starting place as good as any other.
            <br/>
            To compare Cholera to 100 Years would be doing both books a disservice. They both have different aims, which in Marquezian style appear humble, but their humility is really the source of their ambition. Cholera is a love story, obvious from before you read the book, the first line, and the last. The story seems to have a gravity, a critical mass, where all the elements of love are fixed to this book's pages, embodied by the book's three primary characters: Fermina Daza, Florentino Ariza, and Dr. Juvenal Urbino. These three are in a love triangle that lasts their lives and beyond. A love triangle that embodies all the pleasure and pains attributed to them, but one that doesn’t sit as the locomotion of the story but rather the rubric that time must pass through before reaching its logical end.
            <br/>
            The story, like 100 Years, is semi-historical, running through turn of the century (19th-20th) changes in a Colombian town. Marquez’ descriptions and sidebars are just as vivid and essential to the essence of the story as its characters. One gets lost in the prose, forced to clear historical details like a forest overgrown in an ancient village, but it’s always a joy and the lifeblood of the book. It’s this style, and his love of the archetypal, which has Marquez planting his feet once again in this sudo-mythological style where facts or lessons just sort of drift in and out of the story. Never becoming too dedicated to repeating something too true or too false as to give the reader reason for listening too closely or not closely enough to his weaving.
            <br/>
            For a book harping on a subject as well trodden as love, Marquez does so vigorously and, seemingly, without care for modern sensibility. It seems a statement as metaphysical as any. A full unhinged worship of love for love’s sake (Just as much of Marquez’ writing is X for X’s sake). But here he may be saying something more radical, or at least asking us to say it too. Something akin to “No matter what people say, no matter how small they make love through their rationalizing, it exists, and it’s bigger than any of us expect it. Perhaps as big as life itself. Maybe even bigger.”
        </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}

export default Marquez_LoveInTheTimeOfCholera;