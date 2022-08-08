import d1 from "../assets/d1.jpg";

const Testis = (props) => {
    return (
        
        <div className="max-w-[340px] h-80 bg-[#272358] mx-2 rounded-3xl my-12">
            <img src={d1} alt="developer" className="rounded-full w-40 mx-auto relative -top-20  border-white border-4" />
            <div className="absolute top-20 text-center">
                <p className="py-8 px-6 text-2xl">ALIREZA</p>
                <p className=" px-6">I am a developer blablabla...I am a developer blablabla...I am a developer blablabla...
                I am a developer blablabla...I am a developer blablabla...I am a developer blablabla...
                </p>
            </div>
        </div>
        
    )
}

export default Testis;