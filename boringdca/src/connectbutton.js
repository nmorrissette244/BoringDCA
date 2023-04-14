import React, { useState } from 'react';
import { ethers } from 'ethers';

let provider;
let signer = null;

function ConnectButton(signer) {
    async function connect() {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
    }
    return (
        <div>
            <button onClick={connect}>Connect to Metamask</button>
        </div>
    );
}

export default ConnectButton;
