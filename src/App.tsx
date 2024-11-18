import "./App.css";
import { useState } from "react";

import WalletX from "@getwalletx/walletx-sdk";

type WalletData = {
  address: string;
  balance: string;
  eoaAddress: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const Wallet = new WalletX();

  const createWallet = async () => {
    setLoading(true);
    setWalletData(null);
    const wallet = await Wallet.initWallet();
    console.log("Generated Wallet Data:", {
      address: wallet.address,
      balance: wallet.balance,
      eoaAddress: wallet.eoaAddress,
    });
    setWalletData(wallet);
    setLoading(false);
  };

  return (
    <>
      <div className=" ">
        {walletData && (
          <div className="mb-4">
            <p>Address: {walletData.address}</p>
            <p>Balance: {walletData.balance}</p>
            <p>EOA Address: {walletData.eoaAddress}</p>
          </div>
        )}
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={createWallet}
        >
          Add Smart Account
        </button>
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default App;
