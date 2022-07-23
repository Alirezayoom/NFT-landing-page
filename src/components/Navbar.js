const Navbar = () => {
    const links = [
        {name: "About", link: "/"},
        {name: "Pricing", link: "/"},
        {name: "Contact", link: "/"},
        {name: "Buy NFTs", link: "/"}
    ]

    return (<nav className="py-[50px]">
        <div className="text-white font-normal text-lg flex justify-between">
            <div className="ml-4 font-bold text-xl cursor-pointer">KRYPTO</div>
            <ul className="flex mr-4">
                {links.map(link=>(
                    <li className="ml-16" key={link.name}><a href={link.link}>{link.name}</a></li>
                ))}
            </ul>
        </div>
    </nav>)
}

export default Navbar