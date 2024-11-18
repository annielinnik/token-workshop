import { BrowserProvider } from "ethers";

export const getMetamaskBrowserProvider = () => {
  if (window.ethereum) {
    return new BrowserProvider(window.ethereum);
  } else {
    throw new Error("MetaMask is not installed");
  }
};

const SEPOLIA_CHAIN_ID = "0xaa36a7";

export async function connectWallet() {
  const provider = getMetamaskBrowserProvider();
  const metamaskSigner = await provider.getSigner();
  const address = await metamaskSigner.getAddress();

  try {
    metamaskSigner.provider.send("wallet_switchEthereumChain", [
      { chainId: SEPOLIA_CHAIN_ID },
    ]);

    console.log("You have succefully switched to Sepolia network");
  } catch (switchError: any) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      console.log(
        "This network is not available in your metamask, please add it"
      );
    }
    console.log("Failed to switch to the network");
  }

  return address;
}
