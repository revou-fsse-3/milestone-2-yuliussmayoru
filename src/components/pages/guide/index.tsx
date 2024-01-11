import { useParams } from "react-router-dom";
import ChampionCard from "../../base/champion-card";
import { useEffect, useMemo, useState } from "react";


const baseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/'
const Guide = () => {
    const [data, setData] = useState({})
    const {id}=useParams()

    const getData = async () => {
        const res = await fetch(`${baseUrl}v1/champions/${id}.json`);
        const resJson = await res.json()
        setData(resJson)
    }

    const refinedData: any = useMemo(()=> {
        if (!data) return[];
        const newSplashPath = data.squarePortraitPath?.split('/').slice(3).join('/') 
        return {
            ...data,
            squarePortraitPath: `${baseUrl}${newSplashPath}`,
        }
    }, [data])

    useEffect(()=> {
        getData();
    }, [id]);

    return (
        <ChampionCard 
            name={refinedData.name}   
            shortBio={refinedData.shortBio}
            src={refinedData.squarePortraitPath}
        />
        
    )
}

export default Guide;