import Testis from "./Testis";


const Section4 = () => {
    return (
       <section className="mb-28 ">
           <div className="max-w-xl mx-auto mb-36">
                <p className='font-bold text-center text-teal-400 text-xl mb-2'>TESTIMONIALS</p>
                <p className='text-6xl font-bold text-center'>Read What Others Have To Say</p>
           </div>
           <div className="grid grid-cols-3">
                <Testis />                
                <Testis />                
                <Testis />                
           </div>
       </section>
    )
}

export default Section4;