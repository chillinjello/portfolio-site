import BookReviewTemplate from "../../BookReviewTemplate.js";

const Homer_Iliad = (props) => {
    const title = "Homer - Iliad (7XX BC)";
    const date = "5-15-2022";
    const content = (
        <p>
            Normally I’d try to write this without worrying whether what I’m saying is treading new ground. If I think about it like that I often wonder if I’m not wasting my time, but I think that the ground retread is often the most important ground, and might deserve to be reiterated by another person of a different generation, class, etc.. But in the case of Homer, I can’t help but feel like there’s so much I don’t understand that scholars have been writing about and mulling over in regards to the Iliad that life seems too short to write or read something on Homer by someone who only has just scratched the surface of a poem so at the center of literature. But I will anyway.
            <br/>
            For me the Iliad appeared before reading as influential required reading that, although a bit dusty, was fairly complex and a telling of a powerful story. This would be a great accomplishment for any modern novel, but now, after reading it through, I realize the scope is many times this expected magnitude. The book is religious like the bible, historical like Thucidides, poetic (something which I’m sure differs translation to translation), violent, emotional, and philosophical. The characters are larger than life, distinct, and beg to be made into archetypes. Homer’s take on the siege of Troy is only about three days worth of action but he somehow stuffs every type of struggle, conflict, and loss into these three days. Every element seems large, and somehow this limited personal confrontation with figures like the Atreidae elevates their triumphs and flaws to a nearly metaphysical level. Nearly every aspect of the books is like this. 
            <br/>
            I find myself, writing this, wanting to just keep listing the parts of the book that frame the world in these mythological, “larger than life” terms. Homer seems to embody the spirit of poetry even now. He frames things and places us within his world, showing us how things work on a level that could at once be considered religious, artistic, and scientific. There’s no end to his wisdom here. His worldview seeming so lucid as to make us wonder if there isn’t some part of Homer’s world buried deep within us still, but perhaps at that point we should stop thinking of Homer as a single person but as a collection of people or cultures, all pointing towards their goals, worldviews, foundations. This seems to be a poem that people should read, not only because it’s pretty or emotive, but because it feels like a look behind one of the many shrouds that we find human nature obscured by. It’s enlightening in its use of gods, things which might seem fanciful and distant to us now, alongside subjects like honor, death, family, fate, and purpose, things which still exist in our life, though sometimes differently.
            <br/>
            Another thing that surprised me was how incomplete the story felt. The actual narrative starts off 9 years into the Trojan War and requires fair knowledge of what happens before the start of the war (Paris, Agamemnon, Helen, etc), some basic mediterranean geography, knowledge of greek gods (Zeus, Ares, Aphrodite, etc), and some post-Iliad story beats. So, you basically need to know the story before you read it. It’s in some ways an issue, but also makes the story feel somehow open. And reading some Sophocles makes me appreciate that this take on the story doesn’t need to be perfectly accurate. In some ways it’s best to just pay attention to the details and story beats just contained within the Iliad. All the extra-Iliad context is just icing. 
        </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}

export default Homer_Iliad;