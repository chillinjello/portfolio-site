import BookReviewTemplate from "../../BookReviewTemplate.js";

const PhilipRoth_AmericanPastoral = (props) => {
    const title = "Philip Roth - American Pastoral (1997)";
    const date = "6-1-2021";
    const content = (
        <div>
            <p>American Pastoral is at once both a giant book and a modest one. It follows a simple story of a family who’s troubled daughter grows up to become a political terrorist, bombing a mail building and killing a person in the process. It’s told from a reminiscing narrator’s perspective, presumably Roth, who has just found out about what happened to a past role model of his. The role model is the Swede, a high school athlete, successful businessman, and all around affable american. It’s this Swede and Mrs New Jersey, the Swede’s wife’s, daughter who goes to blow up the post office.
            <br/>
            The story is at its heart a dive into the changing psyche of the American over the course of the 1940s-70s. We’re presented with generational conflicts, racial tensions, and American ideals which have all become bloodied and bruised by the social and political climates of the time. The story of the Swede and his family is meditated on over the course of ~400 pages. While the story post-bombing is told chronologically and revealed slowly to the reader, the actual bombing and history of the family is told over and over again, with each pass over feeling like another round about a drain which the “American Pastoral” is sinking down. Characters are revealed as more insidious upon each recollection and side character’s and traumatic instances are revealed giving shape to a desolate and depraved America that seems to have been destined to fail.
            <br/>
            As the story progresses, it feels as though the further and further detail given to the story are Roth’s way of trying to explain, explain what is in many ways too traumatic to explain in a simple conversation, press report, or scientific study. He validates his art by showing us what no one else has the ability to quite articulate in a prose which is both beautiful and puts the reader into a sort of dreamy limbo that has the reader trying to grapple with american pastiche and gruesome outcomes. The American Pastoral is both good and horrifying in a way which makes it hard to look away or remove the brand which it applies to much of the sacred american past. The hope is Roth is cynical so we don’t have to be. It’s clear america is different now and has had and continues to have problems but part of Roth’s merit is that he tries to knock us awake to see those problems and not dismiss the uniqueness of our time and place. In many ways American Pastoral is a document of political and social apocalypse, one which we’ve already been here to witness and should be prepared to experience again.
            </p>
        </div>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}

export default PhilipRoth_AmericanPastoral;