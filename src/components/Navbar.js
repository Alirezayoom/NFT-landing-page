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
            <div className="ml-4 font-bold text-xl cursor-pointer">KRYPTO</div>
            <div onClick={navHandler} className="absolute right-4 top-[50px]
             font-bold text-xl cursor-pointer md:hidden">y</div>
            <ul className={`mr-4 md:static md:flex
            absolute top-[100px] bg-[#010922]
            md:bg-transparent md:w-auto w-full md:pb-0 pb-8 
            md:shadow-none shadow-black shadow-lg
            ${nav ? 'mt-auto' : 'hidden'} `}>
                {links.map(link=>(
                    <li className="md:ml-16 ml-4 md:py-0 py-4" key={link.name}><a href={link.link}>{link.name}</a></li>
                ))}
            </ul>
        </div>
    </nav>)
}

export default Navbar