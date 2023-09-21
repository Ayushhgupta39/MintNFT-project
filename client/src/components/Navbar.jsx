import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

const Navbar = () => {
  const { connectWallet, connectedAccount } = useContext(Context);
  return (
    <nav className="text-white flex justify-between w-full items-center bg-gray-800 p-2 shadow-lg">
      <div className="font-bold text-lg">NFT-MINTER</div>
      <div>
        <button
          onClick={connectWallet}
          className="bg-white text-black font-bold hover:bg-gray-200 p-2 rounded-full"
        >
          {connectedAccount
            ? `${connectedAccount.slice(0, 5)}...${connectedAccount.slice(
                connectedAccount.length - 4
              )}`
            : "Connect Wallet"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
