import { useState, useEffect } from "react";
import { ethers } from "ethers";

function MetamaskButton() {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        async function checkConnection() {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.BrowserProvider(window.ethereum);
                try {
                    const network = await provider.getNetwork();
                    setIsConnected(true);
                } catch (error) {
                    setIsConnected(false);
                }
            } else {
                setIsConnected(false);
            }
        }

        checkConnection();

        window.ethereum.on("accountsChanged", (accounts) => {
            checkConnection();
        });

        return () => {
            window.ethereum.removeAllListeners("accountsChanged");
        };
    }, []);

    const connectMetamask = async () => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={connectMetamask}>
            {isConnected ? "Connected to Metamask" : "Connect to Metamask"}
        </button>
    );
}

export default MetamaskButton;