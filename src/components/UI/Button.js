const Button = (props) => {
    
    return <button className={`text-white py-[22px] px-10 md-ml-0 mx-auto md:w-80 max-w-80 rounded-[35px] border-2 font-semibold text-lg  ${props.className}`}>{props.children}</button>
}

export default Button;