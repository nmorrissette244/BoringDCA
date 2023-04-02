import { useState, useEffect } from "react";
import Web3 from "web3";

function Balance() {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        async function loadBalance() {
            const web3 = new Web3(Web3.givenProvider);
            const accounts = await web3.eth.getAccounts();
            const balance = await web3.eth.getBalance(accounts[0]);
            setBalance(web3.utils.fromWei(balance));
        }

        loadBalance();
    }, []);

    return (
        <div>
            <p>Your Metamask balance:</p>
            <p>{balance ? `${balance} ETH` : "Loading..."}</p>
        </div>
    );
}

export default Balance;