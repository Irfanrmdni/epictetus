export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-24 container mx-auto text-center">
            <span className="text-white/60 text-base">Copyright (c) {year} - Design By Irfan</span>
        </footer>
    );
}