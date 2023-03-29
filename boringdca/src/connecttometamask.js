import React, { useState } from 'react';
import Web3 from 'web3';

function ConnectToMetamask() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);

  const connectToMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <button onClick={connectToMetamask}>Connect to Metamask</button>
      {accounts && <p>Connected with account: {accounts[0]}</p>}
    </div>
  );
}

export default ConnectToMetamask;
