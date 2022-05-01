import BookReviewTemplate from "../../BookReviewTemplate.js";

const PedroCalderon_LifeIsADream = (props) => {
    const title = "Pedro Calderon de la Barca - Life Is a Dream (1636)";
    const date = "7-1-2021";
    const content = (
        <p>
            Life is a Dream is a classic and influential story with themes that deserves to be taken in respect to that fact. Apparently it had an impact on some of the German Idealists and that’s not surprising given the lesson and themes are highly philosophical and, in some ways, outgrow the story itself. The two main themes that fall into this category have to do with fate, or lack of free will, and life being a dream (as the title suggests). The main character Segismundo who is the rightful heir to the king of Poland but who is outcast because of being born under a bad omen. 
            <br/>
            Segismundo’s ability to play into fate is a surprising and awful cascade of events but the twist at the end suggests that he does have some sort of free will (beyond the prophecy of the bad omen) but it’s still unclear whether if it was predetermined in other ways (possibly by the king throwing himself before him willingly). Segismundo also believes that this is all occurring in a dream but, by the end when he’s been told he’s been brought back into reality, he is still unsure and cautious given what he now knows. It’s as though a veil has been pulled back and he’s witnessed how up in the air these things are, further beyond all those around him.
            <br/>
            It’s possible Segismundo is still a bad person but the realization that he is in control of himself in this “dream” and capable of such atrocities actually increases his moral responsibilities. Wouldn’t one want to do what is considered right? if things also have the ability to dissolve just as easily as they were presented to you. This also implies some spiritual other. If this is a dream, then there must be some kind of awakening, one that is somehow veiled from us but is nevertheless there and should be considered more seriously then the things around us which can seem transient. 
            <br/>
            This play seems like a great secularization of concepts more at home in religions, like christianity, and the morals seem equally christian, which is probably a product of renaissance spain.
        </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}

export default PedroCalderon_LifeIsADream;