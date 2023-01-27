
export function DivP2P({data}) {

    return(
        <>
            {data.map === undefined ? "null" : data.map((e, index) => {
                const {advNo, asset, classify, fiatSymbol, fiatUnit,maxSingleTransAmount,maxSingleTransQuantity,  minSingleTransAmount, minSingleTransQuantity, price, tradableQuantity, tradeMethods, tradeType,surplusAmount } = e.adv;

                const {userNo, nickName,monthOrderCount, monthFinishRate } = e.advertiser;



                return(
                    <div className="post" key={index}>
                        
                        <div className="divPicture">
                            <p className="profilePicture">{nickName[0].toUpperCase()}</p>

                        </div>

                        <div className="user">
                            <p style={{"textDecoration": "underline"}}>{nickName}</p> 
                            <p>Orders: {monthOrderCount} | Finished: {(monthFinishRate * 100).toFixed(2)}%</p>
                        </div>

                        <div  className="price">
                            <p style={{"fontWeight": "bold"}} >Price</p>
                            <p style={{"fontSize": "1rem"}}>{price} {fiatUnit}</p>
                            
                        </div>

                        <div className="limit">
                            <p>Disponible: </p>
                            <p>{surplusAmount} {asset}</p>
                            <p>Limite: </p> 
                            <p> {fiatSymbol} {minSingleTransAmount} -{fiatSymbol} {maxSingleTransAmount}</p>
                        </div>

                        <div className="pago">
                            <p style={{"fontWeight": "bold"}} className="pPago">Pago </p>
                            {tradeMethods.map((method, index) => {
                                return(

                                    <div className={"methodType"}>
                                                                                <p key={index} className={"singleMethod"}  style={{"color":method.tradeMethodBgColor }}>{method.tradeMethodName}</p>
                                    </div>

                                )
                            })}
                        </div>

                        <div className="ButtonAction">
                            <a target={"_blank"} href={`https://p2p.binance.com/es/advertiserDetail?advertiserNo=${userNo}`}>
                            <button style={tradeType === "SELL" ? {"backgroundColor": "green"} : {"backgroundColor": "red"}}>{tradeType === "SELL" ? `Comprar ${asset}` : `Vender ${asset}` }</button>
                            </a>
                        </div>

                    </div>
                )


            })}
        </>
    )
    

}
