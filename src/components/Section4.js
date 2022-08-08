import Testis from "./Testis";


const Section4 = () => {
    return (
       <section className="mb-28 w-full mx-auto">
           <div>
                <div className="max-w-xl mx-auto mb-36">
                        <p className='font-bold text-center text-teal-400 text-xl mb-2'>TESTIMONIALS</p>
                        <p className='text-6xl font-bold text-center'>Read What Others Have To Say</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1">
                        <Testis />                
                        <Testis />                
                        <Testis />                
                </div>
           </div>
       </section>
    )
}

export default Section4;