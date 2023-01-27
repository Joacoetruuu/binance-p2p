import { useEffect, useState } from "react"
import { DivP2P } from "./DivP2P";
import { Header } from "./Header";


export function App() {

  

  const [criptoUse, setCriptoUse] = useState("btc");
  const [methodType, setMethodType] = useState("sell"); 

  const [data, setData] = useState({});

  async function getP2p(){
    let res = await fetch(`https://criptoya.com/api/binancep2p/${methodType}/${criptoUse}/ars/20`)
    .catch(error => console.log(error))
    let data = await res.json(); 

    return data 
}

  useEffect(() => {
    async function get(){
      setData(await (await getP2p()).data)
    }; 
    get(); 
  }, [])


  

  return(
    <>
        <Header setMethodType={setMethodType} methodType={methodType} criptoUse={criptoUse} setCriptoUse={setCriptoUse} getP2p={getP2p} setData={setData}/>
        <div className="container">
          <DivP2P data={data}></DivP2P>
        </div>
    </>

  )
  
}
