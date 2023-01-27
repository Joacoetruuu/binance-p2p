import { useEffect, useState } from "react"
import { getP2p } from "../data/getData";
import { DivP2P } from "./DivP2P";

export function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    async function get(){
      setData(await (await getP2p()).data)
    }; 
    get(); 
  }, [])
  

  return(
    <>
        <div className="container">
          <DivP2P data={data}></DivP2P>
        </div>
    </>

  )
  
}
