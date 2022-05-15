import BookReviewTemplate from "../../BookReviewTemplate.js";

const JohnWilliams_Stoner = (props) => {
    const title = "John Williams - Stoner (1965)";
    const date = "5-15-2022";
    const content = (
        <p>
            I heard Michael Silverblatt describe that books can often be described as falling into two categories: complicated multi-layered chess games and emotional rollercoasters. Stoner is the latter. Where most books take me a couple weeks to finish, Stoner took me three days. I was just stressed out thinking about what would happen next to the protagonist, Stoner, and on the surface the book sounds mundane, dry, made for introspective academics, totally unfit for an amateur looking for an afternoon read. 
            <br/>
            The story follows Stoner, a man born on a small Missouri farm in 1891. Once he comes of age he goes to university to study agriculture, but he falls in love with literature and switches majors. He proceeds to spend the rest of his life at the university, first as grad student then as professor, living the most quiet life imaginable. He has an unsatisfactory marriage, literature department quarles, and a chance relationship with a student. Stoner's life is for the most part uneventful, existing in society as a low hum, and ending with a plain, if not pitiful, death sprawled out in a generic mid century hospital.
            <br/>
            Stoner’s plot is on paper stiff, boring, and would make a hard sell sitting on the shelf at any major bookstore. But it’s clear that John Williams’ point exists somewhere in the margins. This might mean there isn’t really a point. Maybe it means the point is to not be like Stoner, or perhaps he’s just a model, someone to idealize, but not actually live like, as clearly his life was awful. (Or was it?) Whatever points John Williams has stuffed into Stoner, the book exists as a middle American cry, one that’s wrapped up in the existentialism of yesteryear and the counterculture critiques of its day. Stoner’s life has a psychedelic quality, but one that’s not detached but instead just like our lives, a giant mirror where we find Stoner looking back at us, lost in the same tornado of life we find ourselves in every morning as we blink back at our aging faces. The pages in this book serve as a reminder, they contain the lessons that we already know, but articulated back to us in a way that I’m sure will make some feel alone, others alive and engaged, and most of us a mix of both.
        </p>
    );
    return <BookReviewTemplate 
        title={title} 
        date={date}
        content={content}
        />
}

export default JohnWilliams_Stoner;