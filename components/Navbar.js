import { useState } from 'react'
import Container from './Container';
import Link from 'next/link';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [offCanvas, setOffCanvas] = useState(false);
    const [search, setSearch] = useState(false);
    const dropDownList = [
        { text: "Internet", href: "/posts" },
        { text: "Books", href: "/posts" },
        { text: "Open Source", href: "/posts" },
    ];

    return (
        <nav className="py-10">
            <Container>
                <div className="flex items-center">
                    {/* burger button */}
                    <div className="flex lg:hidden w-3/12">
                        <button onClick={() => { setOffCanvas(!offCanvas) }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div className="lg:w-2/12 w-6/12">
                        <Link href="/">
                            <a className="flex items-center justify-center lg:justify-start">
                                <div className="w-10 text-2xl bg-gray-500 rounded flex items-center justify-center mr-3 shadow-2xl">E</div>
                                Epictetus
                            </a>
                        </Link>
                    </div>

                    {/* icon search */}
                    <div className="w-3/12 lg:hidden text-right">
                        <button onClick={() => setSearch(!search)}>
                            <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div className={`lg:w-6/12 w-full fixed top-0 lg:h-auto lg:p-0 lg:static h-full p-10 transition-all bg-slate-700 lg:bg-transparent ${offCanvas === true ? 'left-0' : '-left-full'}`}>
                        <ul className="flex lg:items-center lg:justify-evenly flex-col lg:flex-row space-y-6 lg:space-y-0">
                            <button className="absolute top-16 right-10 lg:hidden" onClick={() => setOffCanvas(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <li><Link href="/posts"><a className="hover:underline">UI Design</a></Link></li>
                            <li><Link href="/posts"><a className="hover:underline">Front-end</a></Link></li>
                            <li><Link href="/posts"><a className="hover:underline">Back-end</a></Link></li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline flex items-center"
                                    onClick={() => setDropdown(!dropdown)}>
                                    Lainnya
                                    <svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </a>
                                {dropdown && (
                                    <ul className="absolute w-48 mt-3 bg-gray-800 rounded shadow-2xl">
                                        {dropDownList.map(({ text, href }) => (
                                            <li key={text} className="border-b border-white/50 last:border-0">
                                                <Link href={href}>
                                                    <a className="flex py-2 px-4 hover:bg-gray-600">{text}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={`lg:w-4/12 absolute left-0 top-9 lg:static px-10 lg:px-0 w-full transition-all ${search ? 'top-10' : '-top-40'}`}>
                        <button className="absolute top-2 right-12 lg:hidden" onClick={() => setSearch(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <input type="text" className="lg:w-5/6 w-full bg-gray-700 rounded-md icon-search py-2 px-10 outline-none" placeholder="Search..." />
                    </div>
                </div>
            </Container >
        </nav >
    );
}