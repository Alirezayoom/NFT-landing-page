import d1 from "../assets/d1.jpg";

const SupportItem = (props) => {
    return (
        <div className="max-w-[440px] bg-[#272358] rounded-2xl relative my-16">
            <div className="flex justify-center">
                <img src={props.aks} alt="developer" className="rounded-full w-40 mx-auto  absolute -top-20 shadow-lg shadow-[#272358] " />
            </div>

            <div className="mt-28  text-center mb-10">
                <p className=" px-6 text-2xl font-semibold tracking-[4px] mb-6 ">{props.name}</p>
                <p className=" px-6">{props.description}</p>
            </div>
        </div>
    )
}

export default SupportItem;