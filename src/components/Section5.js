import Button from "./UI/Button";

const Section5 = () => {
    return (
       <section className="mb-36 mx-4">
           <div className="w-full bg-gradient-to-r from-[#565bbd] to-[#94c7d2] rounded-3xl text-center pb-20">
               <p className="py-12 text-black font-bold text-xl">ARE YOU READY?</p>
               <p className="text-5xl font-bold max-w-md mx-auto mb-12">Be A Part Of The Next Big Thing</p>
               <Button className="bg-black border-0 mx-auto" >GET STARTED</Button>
           </div>
       </section>
    )
}

export default Section5;