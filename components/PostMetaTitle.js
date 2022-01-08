import Link from "next/link";

export default function PostMetaTitle({ category, date, title, center }) {
    return (
        <>
            <div className="flex items-center text-white/60 space-x-4 text-sm">
                <p>{category}</p>
                <span>&bull;</span>
                <p>{date}</p>
            </div>
            <h2 className={`text-2xl mt-1.5 hover:text-gray-400 ${center ? "text-center" : ""}`}>
                <Link href="/detail"><a>{title}</a></Link>
            </h2>
        </>
    );
}