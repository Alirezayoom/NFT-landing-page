import Button from './UI/Button';
import r1 from '../assets/r1.png'


const Header = () => {
    return (
        <header  className='mb-28 mx-4'>
            <div className="flex justify-between items-center">
                <div className='md:w-1/2 mt-12 md:text-left text-center'>
                        <div className='font-bold md:text-[85px] sm:text-6xl text-6xl '>Discover And Collect Rare NFTs</div>
                        <p className="text-gray-300 mt-4 text-lg w-80 md:ml-0 mx-auto">The most secure marketplact for buying and selling unique crypto assets.</p>
                        <div className='mt-12 flex'>
                            <Button className="px-[50px] bg-[#9292dc] border-[#9292dc]">BUY NFTS</Button>
                            <Button className="px-[50px] ml-4">SELL NFTS</Button>
                        </div>
                </div>
                <div className='md:block hidden'>
                    <div><img src={r1} alt="phone"/></div>        
                </div>

            </div>
            
            
        </header>
    )
}

export default Header;