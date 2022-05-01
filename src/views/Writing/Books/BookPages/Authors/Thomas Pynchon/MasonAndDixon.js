import BookReviewTemplate from "../../BookReviewTemplate.js";

const Pynchon_MasonAndDixon = (props) => {
    const title = "Pynchon - Mason & Dixon (1997)";
    const date = "11-1-2021";
    const content = (
            <p>
                In Chapter 35 Pynchon advocates for novels or histories as a kind of similar kin, neither which are hindered by facts but rather are interpretations of the present, unchained by preconceptions and let loose to explore the true frontier. 
                <br/>
                Page 429: The third rifle w/ pentagram is not used but rather decorative. However, the professor notes, “This Pentacle, if valu’d for no more than the silent acts of Recognition it provokes, has more than earned back its Expense.” It is to say that it is used symbolically. There is repression even here, slaves everywhere, just has tortured playing in a fancy musical troupe as in Cape Town. 
                <br/>
                The duck seems to be developing with or alongside america. Its developments are twofold: It is growing stubborn and with greater scope, secondly it becomes more powerful, able to plow fields and create an omnipresence. There is also talk of the duck's creator turning to the skies for signs of the duck, maybe hinting at the moon landing. It’s mentioned that the duck’s morphosis is in part because of love (but it is that unlikely masochistic love via the frenchman)
                <br/>
                On page 524 pynchon mention that the catholics are reluctant to adopt the chinese philosophies are not a rejection of the basis that they might work but rather a rejection because they are “too easy” or not clear. This follows that math/physics/chemistry are all christian notions that can be followed through from a logical beginning and ending. I don’t think pynchon really believes this. I think he believes that all these sciences start from experience and thus these alchemies and magic are just as valid.
                <br/>
                Page 701. It seems that mason and dixon are both going through an arc similar to slothrop. They, by being part of this great effort and having finished that effort, now realize or have glimpsed a bit of the truth, the truth that these things are all connected, that their government is truly using them, and that, beyond their government, there are powers that things at foot that have now be unleashed into the world. The line now takes the form of a pandora’s box. It is a conduit for evil, but is just one of the many channels that evil crosses through. Is it the case that good also has its own conduits too? Likely, but it is the evil ones that have the ability to reveal.
                <br/>
                Page 707. Pynchon describes a certain intellectual movement. In mason and dixon’s case it is a physical movement but one which I assume alludes to pynchon’s own reclusion and his intellectual development. The underlying condition of their lives is quickly established as the need to keep, as others a permanent address, a perfect latitude, - no fixed place,is rather a fixed motion, - westering.
            </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}
export default Pynchon_MasonAndDixon;