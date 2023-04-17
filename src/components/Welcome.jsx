import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";

const CommonStyles =
  "min-h-[70px] sm: -px-0 px-3 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-3 w-full rounded-lg p-3 outline-none text-white font-semibold border-none text-md white-glassmorphism  "
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading} = useContext(TransactionContext);

  console.log(connectWallet);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className=" flex flex-1 justify-start flex-col mf:mr-72">
          <h1 className="text-4xl sm:text-5xl text-white py-2 text-gradient-transparent">
            Send Crypto <br /> Across The World
          </h1>
          <p className=" text-left mt-5 text-white font-normal md:w-9/12 w-11/12 text-base">
            explore the crypto world. buy and sell cryptocurrencies easily on
            crypto pay.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer  hover:bg-[#2546bd]"
            >
              <p className=" text-white text-base font-semibold">Connect Wallet</p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${CommonStyles}`}>Reliability</div>
            <div className={CommonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${CommonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${CommonStyles}`}>WEB 3.0</div>
            <div className={CommonStyles}>Low Fee</div>
            <div className={`rounded-br-2xl ${CommonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col  flex-1 items-center justify-start w-full mx-10 mf:mt-0 mt-10 md:flex p-10">
          <div className=" p-4 justify-end items-start flex-clo rounded-xl h-64 sm:w-105 w-full shadow-lg to style the cards appearance my-5 eth-card white-glassmorpism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-starts">
                <div className="w-12 h-12 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={15} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className=" text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                  </p>
                <p className=" text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-105 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="ADDRESS TO :" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="AMOUNT (ETH):" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="KEYWORD (GIF) :" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="ENTER MESSAGE :" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white font-medium w-full mt-2 border-[2px] p-2 border-[#FDF6EC] rounded-full cursor-pointer"
              >
                SEND NOW!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
