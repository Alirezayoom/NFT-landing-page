import Button from './UI/Button';
import l1 from '../assets/l1.png';

const Section2 = () => {
    return (
       <section className="mb-28 md:flex justify-between grid grid-cols-1 justify-items-center mx-4">
           <div className='md:w-1/2'>
                <img src={l1} alt="l1" />
           </div>
           <div className='md:w-1/2 md:text-left text-center'>
                <div className='mt-7'>
                    <p className='font-bold text-teal-400 text-xl mb-2'>ANALYTICS</p>
                    <div className='text-6xl font-bold'>Buit-In Analytics To Track Your Ntfs</div>
                    <p className='text-gray-300 mt-6 mb-9 text-xl'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your krypto
                        profolio over time.
                    </p>
                </div>
                <Button className="border-[#9292dc] bg-[#9292dc]">VIEW OUR PRICING</Button>
           </div>
       </section>
    )
}

export default Section2;