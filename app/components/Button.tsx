import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button 
    className={`flexCenter transition ease-in-out delay-150 hover:scale-110 gap-3 rounded-full border cursor-pointer ${variant}`}
    type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button