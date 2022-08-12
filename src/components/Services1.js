import Button from './UI/Button';
import l1 from '../assets/l1.png';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Services1 = () => {
    return (
       <section className="max-w-[1080px] mx-auto">
           <div className='mx-4 mb-28 md:flex justify-between grid grid-cols-1 justify-items-center '>
           <div className='md:w-1/2' data-aos="fade-right">
                <img src={l1} alt="l1" />
           </div>
           <div className='md:w-1/2 md:text-left text-center' >
                <div className='mt-7'>
                    <div data-aos="fade-down">
                    <p className='font-bold text-teal-400 md:text-xl sm:text-lg text-base mb-2'>ANALYTICS</p>
                    <div className='lg:text-6xl text-5xl font-bold'>Buit-In Analytics To Track Your Ntfs</div>
                    </div>
                    <p className='text-gray-300 mt-6 mb-9 md:text-xl text-base'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your krypto
                        profolio over time.
                    </p>
                    
                </div >
                <div  data-aos="fade-up">
                <Button className="border-[#9292dc] bg-[#9292dc] hover:bg-[#7878d6] hover:border-[#7878d6]">VIEW OUR PRICING</Button>
                </div>
           </div>
           </div>
       </section>
    )
}

export default Services1;