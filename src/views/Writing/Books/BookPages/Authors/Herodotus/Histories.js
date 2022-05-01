import BookReviewTemplate from "../../BookReviewTemplate.js";

const Herodotus_Histories = (props) => {
    const title = "Herodotus - Histories (430 BC)";
    const date = "2-1-2022";
    const content = (
            <p>
                Herodotus’ histories seems to occupy that in between places that so much great confused art exists in. To the modern mind it presents itself as a “history” but it can’t quite hit the mark, though it tries in a more earnest fashion than any other historian. It doesn’t profess to be philosophical or interesting in the way a good book, ie moby dick or hamlet, might, but it somehow is more profound in it’s quilt of characters than any peer in that group. Forgoing it’s unfortunate pretensions, we’re left with a kaleidoscope of place, people, misinterpretation, myth, superstition, and no lack of history. 
                <br/>
                My main motivational factor going into this book was its brief but integral mention in pynchon’s mason and dixon. Pynchon hints that possibly the true point of fiction lies in Herodotus. Herodotus doesn’t quite point out history in any true sense but rather highlights some alternate vein that runs within the true landscape of time, one that’s been lost in time but still accounts for why we stand (and type) here today. The true reality almost seems to reveal itself in the shadows of the lamps Herodotus has eagerly lit for us; the effort to illuminate his papyrus scrolls inadvertently shines a murky orange glow across the truth, otherwise found only in the marks in stones smattered across the mediterranean landscape. The bands of narration weave in and out of themselves as Herodotus, always with a sense of linearity, is willing to jump back and forth between genres in a style more conversational than thematic. The story gives insight into the Greek mind, one which has been brought up in a culture which worships freedom and pegan myth and art, and extrapolates purpose for everyone listening, even here over two millennia later.
                <br/>
                Without Wikipedia and Christianity, Herodotus seems like an existential pioneer, bouncing between reverence for omens and experimental politics with the carefree ease of an otter picking out a rock. He rarely seems to produce any sort of rigor to his wisdom in the form of logic but he makes up for it in anecdotes and sudo-histories. The facts of the matter remain: Greece did in some way win and Persia didn’t conquer Greece. These facts Herodotus wields like crane operator swinging a wrenching ball of freedom and justice into the crowd of the usurpers, those being the dogmatic, facistic peoples which Herodotus seems to do his best to praise as much as he does his best to point out their flaws.
                <br/>
                One of incredible features that Herodotus is privy to have noticed throughout his travels is that people seem to be similar wherever one might go. Women, children, barbarians from across the mediterranean all get their due. Complex social and personal lives are to be found in all corners of the world. Fashion, inventions, and other novel characteristics are all praised repeatedly throughout Herodotus’ romp through the lives of foreign people. Herodotus seems to have a temperament which can be admired more than the characters of the book themselves making his telling of the stories here the real character or lesson to be gained, and in these sense the book does seem to remain a history rather than a fiction, but the lines are only this once at all clear.
                <br/>
                Herodotus earns his way into the right of the classics with his poetic and philosophic temperament. He’s never too far from giving a nugget of advice or a reference to another historical event, myth, or word of wisdom. There are some deeply moving passages throughout the book: The crossing of the hellespont where Xercis thinks about the mortality of his men, Solon’s words of wisdom to the king of Ithaca, and his pindar references are as crushing as they are relevant: 
                <br/>
                <ul style={{listStyle: "none"}}>
                <li>“</li>
                <li>Custom is the lord of everything,</li>
                <li>of mortals and immortals king.</li>
                <li>High violence it justifies,</li>
                <li>with hand uplifted plundering</li>
                <li>“</li>
                </ul>
                -Pindar
                <br/>
                I may fall into the minority in that the first few books before the Greeks got the limelight were my favorite. Herodotus seems feverishly interested in what he has to say about these distant people and their histories and it shows in the text. We never quite get time to gather our breath, the stories are filled with folklore which makes them interesting from all sorts of angles, and he’s pulling from a wealth of knowledge which seems to reveal the most interesting details. It’s an amazing read from any perspective. The later part of the book dragged in some ways. It’s likely because I don’t have strong ties to Greece and I don’t know all about the politics involved, but it’s most likely that I picked up and put down the book one too many times and forgot one or two of the characters causing me to get a little confused.
                All in all, I see why it’s a classic. I would be endlessly involved with a modern herodotus’ work, and maybe I am. It seems a lot of the postmoderns take a lot cues from his meandering, semi-historic dump of information.

            </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}
export default Herodotus_Histories;