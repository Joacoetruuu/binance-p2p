import { useEffect } from "react"

export  function Header({criptoUse, setCriptoUse, get, getP2p, setData, setMethodType, methodType}) {
  
    async function get(){
        setData(await (await getP2p()).data)
    }

    useEffect(() => {
        get();
    }, [criptoUse,methodType ])

    return (
    <header>
        <nav>
            <button className="btnOption" onClick={e => {
                setCriptoUse("btc")
            }}>BTC</button>

            <button className="btnOption" onClick={e => {
                setCriptoUse("eth")
            }}>ETH</button>

            <button className="btnOption" onClick={e => {
                setCriptoUse("usdt")
            }}>USDT</button>

            <button className="btnOption" onClick={e => {
                setCriptoUse("dai")
            }}>DAI</button>

            <button className="btnOption" onClick={e => {
                setCriptoUse("bnb")
            }}>BNB</button>

            <button className="btnOption" onClick={e => {
                setCriptoUse("busd")
            }}>BUSD</button>
        </nav>

            <nav className="optionSelected">
                <button className="buy" onClick={e => {
                    setMethodType("buy")
                }}>Buy</button>
                <button className="sell" onClick={e => {
                    setMethodType("sell")

                }}>Sell</button>
            </nav>

    </header>
  )
}
