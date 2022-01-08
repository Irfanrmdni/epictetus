export default function PostAuthor({ authorAvatar, authorName, authorJob }) {
    return (
        <div className="flex items-center mt-5">
            <img src={authorAvatar} alt="author 1" className="w-14 h-14 rounded-full object-cover" />
            <div className="ml-4">
                <h3 className="text-base">{authorName}</h3>
                <span className="text-sm text-white/60">{authorJob}</span>
            </div>
        </div>
    );
}