import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Dashboard from "./dashboard";
import ConnectButton from "./connectbutton";

let provider;
let signer = null;

function Body() {
    // Track state of wallet connection globally in Body
    let [isConnected, setConnected] = useState(false);

    // On initial load, check if the user is connected to Metamask wallet
    window.addEventListener('load', () => connectionCheck());

    async function connectionCheck() {
        // Checks if metamask is installed using ethers, and if so, if the user is connected
        if (window.ethereum != null) {
            provider = new ethers.BrowserProvider(window.ethereum);
        }
    }

    // Add event listener to detect when user connects/disconnects wallet
    window.ethereum.on('accountsChanged', (accounts) => {
        connectionCheck();
    });

    return (
        <>
            {isConnected ? <Dashboard /> : <ConnectButton />}
        </>
    );
}

export default Body;