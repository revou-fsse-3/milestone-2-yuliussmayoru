import { ImgHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

type CardElementProps = {
    label: string
    containerClassName?: string
    descriptionClassName?: string
    to: string
}

type CardProps = ImgHTMLAttributes<HTMLImageElement> & CardElementProps

const Card = (props: CardProps) => {
    const {
        label,
        containerClassName,
        descriptionClassName,
        to,
        ...rest
    } = props

    return (
        <Link to={to} className={containerClassName}>
            <img {...rest} />
            <p className={descriptionClassName}>{label}</p>
        </Link>
    )
}

export default Card