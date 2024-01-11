import { HTMLAttributes } from "react"

type CardElementProps = {
    label : string
    containerClassName: string
    descriptionClassName: string
}

type CardProps = HTMLImageElement & CardElementProps

const CardContent = (props) => {

    const {
        label,
        containerClassName,
        descriptionClassName,
        rest
    } = props
    return (
        <div class>
            <img {...rest}/>
            <p>{}</p>
        </div>
    )
}

export default CardContent