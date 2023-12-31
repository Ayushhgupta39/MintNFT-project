import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

const NFTCard = () => {
    const { connectedAccount } = useContext(Context);
  return (
    <div className="max-w-sm m-10 border rounded-lg shadow bg-gray-800 border-gray-700">
      <div className="bg-[url('/assets/images/NFT_image.jpg')] bg-cover rounded-lg bg-no-repeat w-full h-72"></div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          The Rule of Apes 2023 NFT
        </h5>

        <p className="mb-3 font-normal text-gray-400">
          The Rule of Apes NFT is a singular, exclusive digital artwork centered
          around an ape-themed NFT. Claim yours now!
        </p>
        <div className="flex flex-row-reverse">
          {connectedAccount ? (
            <button className="bg-white text-black font-bold p-2 rounded-md hover:bg-gray-100">
            Mint NFT!
          </button>
          ) : (
            <div className="text-gray-400 flex w-full font-semibold">
                <p>Connect your wallet to Claim your NFT.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
