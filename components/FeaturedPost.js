import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function FeaturedPost() {
    return (
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="lg:w-8/12 md:w-7/12 w-full px-4">
                    <Link href="/detail">
                        <a>
                            <img src="/featured-thumbnail.png" alt="featured thumb" className="rounded-lg object-cover w-full md:mb-0 mb-4" />
                        </a>
                    </Link>
                </div>
                <div className="lg:w-4/12 md:w-5/12 w-full px-4">
                    <InfoPost
                        category="UI DESIGN"
                        date="July 02 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors."
                        description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
                        authorAvatar="/author-1.png"
                        authorName="Leslie Alexander"
                        authorJob="UI Designer"
                    />
                </div>
            </div>
            <hr className="border-white/40 mt-8 md:hidden" />
        </article>
    );
}