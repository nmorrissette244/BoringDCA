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
        if (window.ethereum == null) {
            setConnected(false);
            provider = ethers.getDefaultProvider()
        } else {
            provider = new ethers.BrowserProvider(window.ethereum);
        }
        if (signer != null) {
            setConnected(true);
            console.log("signer is not null");
        } else {
            setConnected(false);
            console.log("signer is null");
        }
    }

    // Add event listener to detect when user connects/disconnects wallet
    window.ethereum.on('accountsChanged', (accounts) => {
        connectionCheck();
    });

    return (
        <>
            {isConnected ? (
                <Dashboard />
            ) : (
                <ConnectButton />
            )}
        </>
    );
}

export default Body;