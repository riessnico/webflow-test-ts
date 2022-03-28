import dotenv from 'dotenv'

console.log('typescript no webflow chora');

const p = document.querySelector('.text-plz') as HTMLParagraphElement

const connectWallet = async () => {

    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });
    
    if (accounts.length > 0) {
        
        p.innerText  = accounts[0]
    
    }


}

let { API_KEY } = process.env;

console.log(API_KEY)

connectWallet()

export {}