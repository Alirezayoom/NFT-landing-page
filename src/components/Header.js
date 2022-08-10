import Button from './UI/Button';
import r1 from '../assets/r1.png'


const Header = () => {
    return (
        <header  className='mb-28 mx-4'>
            <div className="flex justify-between items-center">
                <div className='absolute w-[700px] h-[700px] right-[-180px] rotate-45 top-0 z-[0]  
                 bg-[radial-gradient(#688891_,#010922_70%)] hidden
                '
                >hi</div>
                <div className='md:w-1/2 md:mt-24 mt-8 md:text-left text-center '>
                        <div className='font-bold lg:text-[85px] md:text-7xl sm:text-6xl text-5xl '>Discover And Collect Rare NFTs</div>
                        <p className="text-gray-300 mt-4 sm:text-lg text-base md:w-80 md:ml-0 mx-auto">The most secure marketplact for buying and selling unique crypto assets.</p>
                        <div className='mt-12 sm:flex md:mx-0 sm:mx-12 justify-center '>
                            <Button className=" md:w-1/2 bg-[#9292dc] border-[#9292dc] md:mx-0 mx-2 mb-4">BUY NFTS</Button>
                            <Button className=" md:w-1/2 md:ml-4 md:mx-0 mx-2 mb-4">SELL NFTS</Button>
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