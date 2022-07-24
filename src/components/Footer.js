import Button from "./UI/Button";



const Footer = () => {
    return (
       <footer>
           <div className="flex w-2/3 justify-between pr-20">
                <div className="font-bold text-xl">KRYPTO</div>
                <div>
                    <p >Krypto</p>
                    <div className="text-gray-400 mt-4">
                        <p>Home</p>
                        <p>About</p>
                        <p>Buy NFTs</p>
                        <p>Sell NFTs</p>
                    </div>    
                </div>
                <div>
                    <p>Market</p>
                    <div className="text-gray-400 mt-4">
                        <p>Browse NFTs</p>
                        <p>Buy NFTs</p>
                        <p>Sell NFTs</p>
                    </div>    
                </div>
                <div>
                    <p>Contact</p>
                    <div className="text-gray-400 mt-4">
                        <p>Email</p>
                        <p>Linkedin</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                </div>
                        
           </div>
           <div>
                <p>Join Our Newsletter</p>
                <form>
                    <input type="text" placeholder="Email Address" className="text-white bg-[#272358] py-6 px-24 rounded-[37px] border-2 border-[#272358] font-semibold text-xl mr-8" />
                    <Button className="border-[#272358] bg-[#9292dc] absolute -left-30">SUBMIT</Button>
                    
                </form>
           </div>
       </footer>
    )
}

export default Footer;