import { useEffect, useMemo, useState } from 'react'
import Card from './components/base/card';
import { Link } from 'react-router-dom';

const baseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';
const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await fetch(`${baseUrl}v1/champion-summary.json`);
    const resJson = await res.json()
    const newData = resJson.filter((item: any) => item.id !== -1)
    setData(newData);
  }

  const refinedData: any = useMemo(()=> {
    if (!data) return[];
    return data.map((item: any) => {
      const newSplashPath = item.squarePortraitPath.split('/').slice(3).join('/') 
      return {
        ...item,
        squarePortraitPath: `${baseUrl}${newSplashPath}`,
      }
    })
  }, [data])
  console.log(refinedData)

  useEffect(()=> {
    getData()
  }, []);

  return (
    <div className='grid grid-cols-4 p-4'>
     {refinedData.map((item: any) => (
      <Card 
      key={item.id}
      label={item.name}
      src={item.squarePortraitPath}
      containerClassName="col-span-1 shadow rounded-lg min-h-40 justify-between p-5 cursor-pointer hover:shadow-lg"
      to={`/guide/${item.id}`}

    />
     ))}
    </div>
  )
}

export default App
