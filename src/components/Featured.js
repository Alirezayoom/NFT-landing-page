import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';


const Featured = () => {
    return (
        <section className='mb-28 mx-4'>
        <p className='mb-4'>FEATURED ON</p>
        <div className="bg-[#272458] rounded-lg py-5">
            
            <div className='md:flex sm:grid sm:grid-cols-2 sm:justify-items-center sm:mx-20 grid grid-cols-1 justify-items-center items-center md:justify-between' >
                <div className='px-4 my-0'><img src={p1} alt="p1"/></div>
                <div className='px-4 my-3'><img src={p2} alt="p1"/></div>
                <div className='px-4 my-3'><img src={p3} alt="p1"/></div>
                <div className='px-4 my-3'><img src={p4} alt="p1"/></div>
            </div>
        </div>
        </section>
    )
}

export default Featured;