import { InputHTMLAttributes } from 'react';

type InputProps = {
    label: string
    error: boolean
}
type Props = InputProps & InputHTMLAttributes<HTMLInputElement>


const Input = ({error, label, ...rest}: Props) => {
    return (
        <div className="input-wrapper bg-white text-black">
            <label htmlFor={label}>{label}</label>
            <input { ...rest}/>
            {error && <p className="error">Input field can't be empty!</p>}
        </div>
    )
}

export default Input