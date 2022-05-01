import BookReviewTemplate from "../../BookReviewTemplate.js";

const Pynchon_CryingOfLot49 = (props) => {
    const title = "Pynchon - The Crying Of Lot 49 (1966)";
    const date = "2-1-2022";
    const content = (
            <p>
                Oedipa Maas’ venture to San Narcisco is shrouded in California dreams. The getaway, the attractive ex-actor, the filthy motel, crappy garage band, and allure of unexpected riches. Oedipa is being roped into such a situation not by a cold malevolent hand but by the rich hallucinations of Californian regret and misspent youth. The normalcy of Oedipa’s life is marked by a torchorous and monotonous daily life riddled with consumerism, settling for less, and dreams of a better, more ethical life where thoughts are acted upon, where the void of expectation doesn’t suck you into the california 9-5 pyramid scheme. Normal life is fixed, unmovable, the anomalous act or event is a dream an image which somehow situates itself as the inverse imprint daily life situates upon the psyche of those traveling the 5, 10, 405, and all the other major arteries which connect the various bodies which are rapidly, like a sprouting bulb, growing into and out of one another. The decisions and structure of everything seem to manifest primarily from the unconscious crowd which lethargically moves through these places, unsure what to do next or how to proceed. Those holding people into their place take hobbes-ian stances, Christians and Nazis alike, and commit to holy wars building carpool lanes, shopping centers, and boardwalks. None fall outside the spectrum, nor does anyone fall to one extreme or the other. Hippies and bums want handouts and social standing. Soccer moms and execs pay a premium to save the planet, vote for libral candidates, and pick out their favorite charities. Outside of the uninterested, no one misunderstands this. The social pyramid is conscious of itself in the same way a good play or foul invokes a reaction across a stadium crowd.
            </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}
export default Pynchon_CryingOfLot49;