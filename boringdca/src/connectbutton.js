import React, { useState } from 'react';
import { ethers } from 'ethers';

let provider;
let signer = null;

function ConnectButton(signer) {
    return (
        <div>
            <button>Connect to Metamask</button>
        </div>
    );
}

export default ConnectButton;
