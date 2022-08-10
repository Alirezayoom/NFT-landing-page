import { useState } from "react"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        setNav(!nav)
    }

    const links = [
        {name: "About", link: "/"},
        {name: "Pricing", link: "/"},
        {name: "Contact", link: "/"},
        {name: "Buy NFTs", link: "/"}
    ]

    return (<nav className="mb-2 py-[50px]">
        <div className="text-white font-normal text-lg md:flex justify-between">
            <div className="ml-4 font-bold  cursor-pointer">KRYPTO</div>
            
            <div onClick={navHandler} className="absolute right-4 top-[50px]
            font-bold text-xl cursor-pointer md:hidden">{nav ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>}</div>

            <ul className={` md:static md:flex md:mr-4
            absolute top-[100px] bg-[#010922] text-center
            md:bg-transparent md:w-auto w-full md:pb-0 pb-8 
            md:shadow-none shadow-black shadow-lg
            ${nav ? 'mt-auto' : 'hidden'} `}>
                {links.map(link=>(
                    <li className="md:ml-16 md:py-0 py-4" key={link.name}><a onClick={navHandler} className="py-4 md:px-0 px-44" href={link.link}>{link.name}</a></li>
                ))}
            </ul>
        </div>
    </nav>)
}

export default Navbar