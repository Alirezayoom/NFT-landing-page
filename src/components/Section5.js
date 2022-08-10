import Button from "./UI/Button";

const Section5 = () => {
    return (
       <section className="mb-36 mx-4">
           <div className="w-full bg-gradient-to-r from-[#565bbd] to-[#94c7d2] rounded-3xl text-center  pb-20">
               <p className="pt-12 pb-8 text-black font-bold md:text-xl sm:text-lg text-base">ARE YOU READY?</p>
               <div className="max-w-md mx-auto">
                    <p className="md:text-5xl text-4xl font-bold  mx-4 mb-10">Be A Part Of The Next Big Thing</p>
               </div>
               <Button className="bg-black border-0 mx-auto" >GET STARTED</Button>
           </div>
       </section>
    )
}

export default Section5;