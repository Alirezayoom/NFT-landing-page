

const Footer = () => {
    return (
    <footer className=" max-w-[1080px] mx-auto">
       <div className="grid md:grid-cols-3 mr-8 mx-4">
           

            <div className="grid grid-cols-2 mb-16">
                <div className="font-bold text-xl">KRYPTO</div>

                <div>
                    <h3 className="font-bold">Krypto</h3>
                    <ul className="text-gray-400 mt-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Buy NFTs</a></li>
                        <li><a href="/">Sell NFTs</a></li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-2 mb-16">
                <div>
                    <h3 className="font-bold">Market</h3>
                    <ul className="text-gray-400 mt-4 ">
                        <li><a href="/">Browse NFTs</a></li>
                        <li><a href="/">Buy NFTs</a></li>
                        <li><a href="/">Sell NFTs</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-bold">Contact</h3>
                    <ul className="text-gray-400 mt-4">
                        <li><a href="/">Email</a></li>
                        <li><a href="/">Linkedin</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
            </div>
                    
           
           <div className="max-w-[480px] mx-auto md:text-left text-center">
                <p className="font-bold text-xl">join our newsletter</p>
                <form className="flex   items-center mt-5 bg-[#272358] rounded-full p-[3px]">
                    <input type="text" placeholder="Email Address" 
                    className="text-white p-5  bg-[#272358] h-[50px] w-full rounded-full
                    border-[#272358] focus:outline-none  " />
                    <button className=" hover:bg-[#7878d6] bg-[#9292dc]  w-52 h-[50px] 
                    font-bold text-sm rounded-full">SUBMIT</button>
                </form>
           </div>

       </div>
       </footer>
    )
}

export default Footer;