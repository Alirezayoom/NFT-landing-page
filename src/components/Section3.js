import Button from './UI/Button';
import r2 from '../assets/r2.png';

const Section3 = () => {
    return (
       <section className="mb-36 flex justify-between">
           <div className='w-1/2'>
                <div className='mt-7'>
                    <p className='font-bold text-teal-400 text-xl mb-2'>ANALYTICS</p>
                    <div className='text-6xl font-bold'>Buit-In Analytics To Track Your Ntfs</div>
                    <p className='text-gray-300 mt-6 mb-9 text-xl'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your krypto
                        profolio over time.
                    </p>
                </div>
                <Button className="px-[50px]">VIEW OUR PRICING</Button>
           </div>
           <div className='w-1/2'>
                <img src={r2} alt="l1" className='ml-auto mr-8' />
           </div>
           
       </section>
    )
}

export default Section3;