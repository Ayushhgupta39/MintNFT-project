import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [isLoading, setLoading] = useState(false);

  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
        console.log(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <Context.Provider value={{ connectWallet, connectedAccount }}>{children}</Context.Provider>;
};
