import { v4 as uuidv4 } from 'uuid';
import { Spinner } from './Spinner';


export function DivP2P({data}) {

    return(
        <>
            {data.map === undefined ? <Spinner/> : data.map((e, index) => {
                const {advNo, asset, classify, fiatSymbol, fiatUnit,maxSingleTransAmount,maxSingleTransQuantity,  minSingleTransAmount, minSingleTransQuantity, price, tradableQuantity, tradeMethods, tradeType,surplusAmount } = e.adv;

                const {userNo, nickName,monthOrderCount, monthFinishRate } = e.advertiser;



                return(
                    <div className="post" key={uuidv4()}>
                        
                        <div className="divPicture"  key={uuidv4()}>
                            <p className="profilePicture">{nickName[0]}</p>

                        </div>

                        <div className="user" key={uuidv4()}>
                            <p style={{"textDecoration": "underline"}}>{nickName}</p> 
                            <p>Orders: {monthOrderCount} | Finished: {(monthFinishRate * 100).toFixed(2)}%</p>
                        </div>

                        <div  className="price" key={uuidv4()}>
                            <p style={{"fontWeight": "bold"}} >Price</p>
                            <p style={{"fontSize": "1rem"}}>{price} {fiatUnit}</p>
                            
                        </div>

                        <div className="limit" key={uuidv4()}>
                            <p style={{"fontWeight": "bold"}}>Available</p>
                            <p>{surplusAmount} {asset}</p>
                            <p style={{"fontWeight": "bold"}}>Limit</p> 
                            <p> {fiatSymbol} {minSingleTransAmount} -{fiatSymbol} {maxSingleTransAmount}</p>
                        </div>

                        <div className="pago" key={uuidv4()}>
                            <p style={{"fontWeight": "bold"}} className="pPago">Payment </p>
                            {tradeMethods.map((method, index) => {
                                return(

                                    <div className={"methodType"} key={uuidv4()}>
                                        <div className='divMethod'>
                                        <p key={index} className={"singleMethod"}  style={{"color":method.tradeMethodBgColor }}>{method.tradeMethodName}</p>

                                        </div>
                                    </div>

                                )
                            })}
                        </div>

                        <div className="ButtonAction" key={uuidv4()}>
                            <a target={"_blank"} href={`https://p2p.binance.com/es/advertiserDetail?advertiserNo=${userNo}`}>
                            <button className="btnAction" style={tradeType === "SELL" ? {"backgroundColor": "green"} : {"backgroundColor": "red"}}>{tradeType === "SELL" ? `Buy ${asset}` : `Sell ${asset}` }</button>
                            </a>
                        </div>

                    </div>
                )


            })}
        </>
    )
    

}
