import InfoPost from "./InfoPost";
import Link from "next/link";

export default function CardPost({ thumbnail, ...infoPost }) {
    return (
        <article className="mt-14">
            <Link href="/detail">
                <a>
                    <img src={thumbnail} className="w-full rounded mb-5" />
                </a>
            </Link>
            <InfoPost {...infoPost} />
        </article>
    );
}