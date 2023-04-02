import React, { useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Dashboard from "./dashboard";
import ConnectToMetamask from "./connecttometamask";
import MetamaskConnectionStatus from "./connectionstatus";

var provider = detectEthereumProvider();

function Body() {
    return (
        <div>
            <MetamaskConnectionStatus />
        </div>
    );
}

export default Body;