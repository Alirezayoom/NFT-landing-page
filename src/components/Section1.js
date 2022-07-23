import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';


const Section1 = () => {
    return (
        <section className='mt-28'>
        <p className='mb-4'>FEATURED ON</p>
        <div className="  bg-[#272458] rounded-lg py-5">
            
            <div className='flex justify-between mx-20 items-center' >
                <span className=''><img src={p1} alt="p1"/></span>
                <span><img src={p2} alt="p1"/></span>
                <span><img src={p3} alt="p1"/></span>
                <span><img src={p4} alt="p1"/></span>
            </div>
        </div>
        </section>
    )
}

export default Section1;