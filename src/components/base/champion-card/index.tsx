import { ImgHTMLAttributes } from "react";

type ChampCardElementProps ={
    name: string;
    shortBio: string;
}

type CardProps = ImgHTMLAttributes<HTMLImageElement> & ChampCardElementProps 

const ChampionCard = (props: CardProps) => {
    const {
        name,
        shortBio,
        ...rest
    } = props
    return (
        <div className="champion-card-wrapper flex">
            <h3>{name} Build Guide</h3>
            <p>{shortBio}</p>
            <img {...rest} className="champion-icon"/>
        </div>
    )
}

export default ChampionCard