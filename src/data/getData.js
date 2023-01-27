export async function getP2p(){
    let res = await fetch("https://criptoya.com/api/binancep2p/sell/dai/ars/20")
    let data = await res.json(); 

    return data 
}