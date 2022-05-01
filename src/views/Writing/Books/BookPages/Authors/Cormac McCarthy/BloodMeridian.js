import BookReviewTemplate from "../../BookReviewTemplate.js";

const CormacMcCarthy_BloodMeridian = (props) => {
    const title = "Cormac McCarthy - Blood Meridian (1985)";
    const date = "9-1-2022";
    const content = (
            <p>
                Going into the subjects in Blood Meridian I knew right off that I would find my biases in the book. Set in mid-19th century south western landscapes, McCarthy captures the hallucinatory visions I seem to have been having all my life. I don’t know if put those there or they were too put into him by mid century western movies or the truly brutal landscape that we seem to have carved our little paradises into. The story is part cowboy novel and part existential horror. You can’t go a few sentences into a discussion about Blood Meridian without mention of the Judge who seems to embody war and all the terrible humanity that the pilgrims thought they might have escaped by chasing their freedom out west. McCarthy’s answer to our ancestors seems to be embodied in the Judge who is a first class enlightenment figure who spends every waking moment studying and learning about the world immediately before him. There’s indication that he doesn’t sleep, he knows every language they happen to come across, and he leaves in his wake everything destroyed that he’s learned. The Judge seems to be this finite, single person who is consuming the world where, like James Joyce’s Ulysses, could be turned inside out and used to recreate this world the Judge is molesting. He’s a character who is frightening on a physical and conceptual level. He both is us and others and describes much of the stained relationship that we live out in our western intellectual tradition.
                <br/>
                The book is ~300 pages long, leaving it feeling both long and short. McCarthy spends no lack of time describing the landscape in beautiful poetic prose that leaves the reader feeling like they’re only just now having vivid sunsets and sandy flats unveiled to them while still left with incomplete and bare sentences which seem to either run on long enough for readers to transcend the sentence itself or too short to ever grasp the true context that such a scenario might take. This dichotomy in the prose most split between the conversations and dialogue which are quick and reminiscent of beat poetry and the inanimate objects which in McCarthy’s writing spill over with life and meaning.
                <br/>
                The story is itself historically placed, visiting real locations across a wide stretch of the North American Mojave desert. Its legs, despite this historical accuracy, are in its deviations from fact or recognizable reality. Native Americans are beyond mean, Cowboys are beyond dirty, and Mexicans are beyond victims. Scenes are told with a vagueness that might make the reader assume that anything (and likely the worst as we see time and time again) is possible. There are Marquezian scenes of whimsy which include fantastical elements like the Mexican equivalent of gypsies or a bar’s dancing bear, introduced to remind one that there is always more than meets the eye and that the well is always deeper than one would suppose. 
            </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}
export default CormacMcCarthy_BloodMeridian;