import React, { useState } from 'react';
import Web3 from 'web3';

function ConnectButton() {
    const [isConnected, setIsConnected] = useState(false);
    const [web3, setWeb3] = useState(null);

    const handleConnect = async () => {
        try {
            // Request access to the user's Metamask account
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Instantiate Web3 with the current provider
            const currentProvider = window.ethereum;
            const web3Instance = new Web3(currentProvider);
            setWeb3(web3Instance);

            setIsConnected(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {isConnected ? (
                <p>Connected!</p>
            ) : (
                <button onClick={handleConnect}>Connect to Metamask</button>
            )}
        </div>
    );
}

export default ConnectButton;
