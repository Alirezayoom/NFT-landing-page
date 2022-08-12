import SupportItem from "./SupportItem";

import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Support = () => {
    return (
       <section className="mb-20  max-w-[1080px] mx-auto">
           <div className="mx-4">
                <div className="max-w-xl mx-auto mb-16" data-aos="flip-up">
                        <p className='font-bold text-center text-teal-400 md:text-xl sm:text-lg text-base mb-2'>TESTIMONIALS</p>
                        <p className='md:text-6xl text-5xl font-bold text-center'>Read What Others Have To Say</p>
                </div>
                <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 justify-items-center">
                        <SupportItem
                            name="ALI" 
                            description="I am a developer blablabla... I am a developer blablabla... I am a developer blablabla... 
                            I am a developer blablabla... I am a developer blablabla... I am a developer blablabla..."
                            aks={d1}
                        />
                        <SupportItem
                            name="MAMMAD" 
                            description="I am a developer blablabla... I am a developer blablabla... I am a developer blablabla... 
                            I am a developer blablabla... I am a developer blablabla... I am a developer blablabla..."
                            aks={d2}
                        />
                        <SupportItem
                            name="MAHDI" 
                            description="I am a developer blablabla... I am a developer blablabla... I am a developer blablabla... 
                            I am a developer blablabla... I am a developer blablabla... I am a developer blablabla..."
                            aks={d3}
                        />
                </div>
           </div>
       </section>
    )
}

export default Support;