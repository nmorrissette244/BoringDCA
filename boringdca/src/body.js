import React, { useState } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import Dashboard from "./dashboard";
import ConnectToMetamask from "./connecttometamask";
import MetamaskConnectionStatus from "./connectionstatus";

function Body() {
    // I guess we can use this to check if the user is connected to metamask

    return (
        <div>
            <MetamaskConnectionStatus />
        </div>
    );
}

export default Body;