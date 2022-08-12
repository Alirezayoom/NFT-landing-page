import { useState } from "react"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [yscroll, setYscroll] = useState(false)
    const navHandler = () => {
        setNav(!nav)
    }

    const links = [
        {name: "About", link: "/"},
        {name: "Pricing", link: "/"},
        {name: "Contact", link: "/"},
        {name: "Buy NFTs", link: "/"}
    ]
    
    const xy = () => {
        if(window.scrollY > 20){
            setYscroll(true)
        }else{
            setYscroll(false)
        }
    }
    window.addEventListener('scroll', xy)
    
    return (<nav className={`mb-2  fixed w-full z-20 ${yscroll ? `${nav ? 'bg-[#010922] py-3' : 'bg-[#010922]/70 py-3'}` : 'py-10'} `}>
        <div className="max-w-[1080px] mx-auto ">
            <div className="text-white font-normal text-lg flex justify-between">
                <div className="ml-4 font-bold  cursor-pointer">KRYPTO</div>
                
                <div onClick={navHandler} className="absolute right-4
                font-bold text-xl cursor-pointer md:hidden">{nav ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>}</div>

                <ul className={` md:static md:flex md:mr-4
                absolute  ${yscroll ? 'top-[52px]' : 'top-[100px]'} bg-[#010922] text-center
                md:bg-transparent md:w-auto  md:pb-0 pb-8 w-full
                md:shadow-none shadow-black shadow-lg
                ${nav ? 'mt-auto' : 'hidden'} `}>
                    {links.map(link=>(
                        <li className="md:ml-16 md:py-0 py-4  mx-auto" key={link.name}><a onClick={navHandler} className="py-4 px-20 md:px-0" href={link.link}>{link.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>)
}

export default Navbar