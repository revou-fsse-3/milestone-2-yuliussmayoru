import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
    label:string
}

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({label, children, ...rest}: Props) => {
    return (
        <button {...rest} className="button">{children}</button>
    )
}

export default Button