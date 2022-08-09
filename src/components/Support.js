import SupportItem from "./SupportItem";

import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'



const Support = () => {
    return (
       <section className="mb-28 w-full mx-auto">
           <div className="mx-4">
                <div className="max-w-xl mx-auto mb-36">
                        <p className='font-bold text-center text-teal-400 text-xl mb-2'>TESTIMONIALS</p>
                        <p className='text-6xl font-bold text-center'>Read What Others Have To Say</p>
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