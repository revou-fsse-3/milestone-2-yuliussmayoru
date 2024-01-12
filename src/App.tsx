import { ChangeEvent, useEffect, useState } from 'react'
import Card from './components/base/card';
import Input from './components/base/Input';
import Form from './components/base/form';

type Data = {
  name: string;
  champion: string;
}
const baseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';
const App = () => {
  const [data, setData] = useState<Data[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  
  const [dataFilter, setDataFilter] = useState<Data[]>([])
  
  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm (e.target.value)
    if(searchTerm.length >  2){
      setDataFilter(() => {
        let nameSearch = data.filter(champion => champion.name.includes(searchTerm))
        console.log(nameSearch)
        return nameSearch
      })
       return 
    }
    setDataFilter(data)
    // console.log(searchTerm)
  
  }
  //useEffect(())


  const getData = async () => {
    const res = await fetch(`${baseUrl}v1/champion-summary.json`);
    const resJson = await res.json()
    const newData = resJson.filter((item: any) => item.id !== -1)
    let refineData= newData.map((item: any) => {
      const newSplashPath = item.squarePortraitPath.split('/').slice(3).join('/') 
      return {
        ...item,
        squarePortraitPath: `${baseUrl}${newSplashPath}`,
      }
    })

    setData(refineData);
    setDataFilter(refineData)
  }

  // const refinedData: any = useMemo(()=> {
  //   if (!data) return[];

  //   return      data.map((item: any) => {
  //     const newSplashPath = item.squarePortraitPath.split('/').slice(3).join('/') 
  //     return {
  //       ...item,
  //       squarePortraitPath: `${baseUrl}${newSplashPath}`,
  //     }
  //   })

  // }, [data])
  // console.log(refinedData)


  useEffect(()=>{
    getData()
  }, [])
  
  return (
    <div className=''>

<div
 className='w-[24rem] mx-auto my-6 '
> 
      <Input
        label='Search Champion :'
        placeholder='Search Champion'
        error={false}
        value={searchTerm}
        onChange={handleSearchTerm}
       
      />

      <Form />

</div>

<div className='flex flex-wrap gap-2'>

     {dataFilter.map((item: any) => (
      <Card 
      key={item.id}
      label={item.name}
      src={item.squarePortraitPath}
      containerClassName="col-span-1 shadow rounded-lg min-h-40 justify-between p-5 cursor-pointer hover:shadow-lg"
      to={`/guide/${item.id}`}

    />
     ))}
</div>
    </div>
  )
}

export default App
