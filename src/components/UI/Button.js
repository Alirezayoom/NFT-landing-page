const Button = (props) => {
    
    return <button className={`text-white md:py-[20px] sm:py-[16px] py-[12px] 
    md-ml-0 mx-auto md:rounded-[32px] sm:rounded-[28px] rounded-[24px] border-2 font-semibold 
    md:w-[250px] sm:w-[200px] w-[180px]
    md:text-lg text-base ${props.className}`}>{props.children}</button>
}

export default Button;