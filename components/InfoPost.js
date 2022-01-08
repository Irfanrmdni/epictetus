import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";

export default function InfoPost({ category, date, title, description, authorAvatar, authorName, authorJob }) {
    return (
        <>
            <PostMetaTitle
                category={category}
                date={date}
                title={title}
            />
            <p className="font-light mt-3 text-white/60">{description}</p>
            <PostAuthor
                authorAvatar={authorAvatar}
                authorName={authorName}
                authorJob={authorJob}
            />
        </>
    );
}