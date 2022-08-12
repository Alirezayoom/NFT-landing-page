import Button from './UI/Button';
import r2 from '../assets/r2.png';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Services2 = () => {
    return (
       <section className="max-w-[1080px] mx-auto">
           <div className='mb-36 md:flex grid grid-cols-1 justify-items-center mx-4 '>
                <div className='md:hidden block'>
                        <img src={r2} alt="l1" className='ml-auto mr-8' />
                </div>
                <div className='md:w-1/2 md:text-left text-center'>
                        <div className='mt-7'>
                            <div  data-aos="fade-down">
                                <p className='font-bold text-teal-400 md:text-xl sm:text-lg text-base mb-2'>ANALYTICS</p>
                                <div className='lg:text-6xl text-5xl font-bold'>Buit-In Analytics To Track Your Ntfs</div>
                            </div>
                            <p  data-aos="fade-right" className='text-gray-300 mt-6 mb-9 md:text-xl  text-base'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your krypto
                                profolio over time.
                            </p>
                        </div>
                        <div  data-aos="fade-up">
                            <Button className=" border-[#9292dc] bg-[#9292dc] hover:bg-[#7878d6] hover:border-[#7878d6]">VIEW OUR PRICING</Button>
                        </div>
                </div>
                <div  data-aos="fade-left" className='w-1/2 md:block hidden'>
                        <img src={r2} alt="l1" className='ml-auto mr-8 ' />
                </div>
           </div>
       </section>
    )
}

export default Services2;