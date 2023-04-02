import React, { useState, useEffect } from "react";
import ConnectButton from "./connectbutton";
import Dashboard from "./dashboard";

function MetamaskConnectionStatus() {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const checkMetamaskConnection = async () => {
            if (window.ethereum) {
                try {
                    await window.ethereum.request({ method: "eth_accounts" });
                    setIsConnected(true);
                } catch (err) {
                    setIsConnected(false);
                }
            } else {
                setIsConnected(false);
            }
        };
        checkMetamaskConnection();
    }, []);

    return (
        <div>
            {isConnected ? (
                <ConnectButton />
            ) : (
                <Dashboard />
            )}
        </div>
    );
}

export default MetamaskConnectionStatus;
