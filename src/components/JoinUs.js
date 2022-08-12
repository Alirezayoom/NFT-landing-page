import Button from "./UI/Button";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const JoinUs = () => {
    return (
       <section className="max-w-[1080px] mx-auto">
           <div className="bg-gradient-to-r from-[#565bbd] to-[#94c7d2] rounded-3xl text-center  pb-20 mb-36 mx-4" data-aos="zoom-in">
               <p data-aos="fade-right" data-aos-delay="300" className="pt-12 pb-8 text-black font-bold md:text-xl sm:text-lg text-base">ARE YOU READY?</p>
               <div className="max-w-md mx-auto"  data-aos="fade-left" data-aos-delay="300" >
                    <p className="md:text-5xl text-4xl font-bold  mx-4 mb-10">Be A Part Of The Next Big Thing</p>
               </div>
               <div  data-aos="fade-right" data-aos-delay="300" >
                <Button className="bg-black  border-black mx-auto" >GET STARTED</Button>
               </div>
           </div>
       </section>
    )
}

export default JoinUs;