import { ImgHTMLAttributes } from "react";
import { Link } from "react-router-dom";

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
            <Link to = '/'>BACK</Link>
        </div>
    )
}

export default ChampionCard