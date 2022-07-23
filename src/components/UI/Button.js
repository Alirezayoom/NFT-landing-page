const Button = (props) => {
    
    return <button className={`text-white py-6 px-24 rounded-[37px] border-2 font-semibold text-xl mr-8 ${props.className}`}>{props.children}</button>
}

export default Button;