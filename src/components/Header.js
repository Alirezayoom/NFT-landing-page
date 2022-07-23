import Button from './UI/Button';
import r1 from '../assets/r1.png'


const Header = () => {
    return (
        <header>
            <div className="mt-[50px] flex justify-between">
                <div className='w-1/2'>
                        <div className='font-bold text-8xl'>Discover And Collect Rare NFTs</div>
                        <p className="text-gray-300 mt-6 text-xl">The most secure marketplact for buying<br/> and selling unique crypto assets.</p>        
                </div>
                <div>
                    <div><img src={r1} alt="phone"/></div>        
                </div>
            </div>

            <div>
                <span><Button className="bg-[#9292dc] border-[#9292dc]" >BUY NTFS</Button></span>
                <span><Button className="border-slate-400">SELL NTFS</Button></span>
            </div>
        </header>
    )
}

export default Header;