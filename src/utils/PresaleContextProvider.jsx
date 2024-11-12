import React, { useEffect, useState } from "react";
import { PresaleContext } from "./PresaleContext";
import EthIcon from "../assets/images/token/eth.png";
import BnbIcon from "../assets/images/token/bnb.png";

const PresaleContextProvider = ({ children }) => {
  const [IsActiveBuyOnEth, setIsActiveBuyOnEth] = useState(false);
  const [IsActiveBuyOnBnb, setIsActiveBuyOnBnb] = useState(true);

  const [buyOnItem, setBuyOnItem] = useState(2);
  const [buyOnText, setBuyOnText] = useState("BUY ON BNB");
  const [buyOnIcon, setBuyOnIcon] = useState(BnbIcon);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  const [userChainId, setUserChainId] = useState(1);
  const [userBalance, setUserBalance] = useState("0 ETH");

  const [maxStage, setMaxStage] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentBonus, setCurrentBonus] = useState("20");
  const [currentPrice, setCurrentPrice] = useState("0.001");
  const [stageEnd, setStageEnd] = useState(1733996440);
  const [nextStage, setNextStage] = useState(0);
  const [nextPrice, setNextPrice] = useState("0.002");
  const [tokenName, setTokenName] = useState("GITTU TOKEN");
  const [tokenSymbol, setTokenSymbol] = useState("GITTU");
  const [presaleToken, setPresaleToken] = useState(100000);
  const [tokenSold, setTokenSold] = useState(20000);
  const [tokenPercent, setTokenPercent] = useState(20);
  const [tokenDecimals, setTokenDecimals] = useState(18);
  const [tokenSubDecimals, setTokenSubDecimals] = useState(0);

  const [usdExRate, setUsdExRate] = useState(2506);
  const [paymentUsd, setPaymentUsd] = useState(0);
  const [paymentPrice, setPaymentPrice] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [bonusAmount, setBonusAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //handle payment input
  const handlePaymentInput = (e) => {
    const _inputValue = e.target.value;
    setPaymentAmount(_inputValue);

    const _ethToUsd = _inputValue * usdExRate;
    const _getToken = parseInt(_ethToUsd / currentPrice);

    const pay = parseFloat(usdExRate * _inputValue).toFixed(3);
    setPaymentUsd(pay);

    setBuyAmount(_getToken);

    const _bonusAmount = parseInt((_getToken * currentBonus) / 100);
    setBonusAmount(_bonusAmount);

    const _totalAmount = _getToken + _bonusAmount;
    setTotalAmount(_totalAmount);

    setPaymentPrice(_inputValue);
  };

  return (
    <PresaleContext.Provider
      value={{
        buyOnItem,
        setBuyOnItem,
        buyOnText,
        setBuyOnText,
        buyOnIcon,
        setBuyOnIcon,
        selectedImg,
        setSelectedImg,
        userChainId,
        userBalance,
        maxStage,
        currentStage,
        currentBonus,
        currentPrice,
        stageEnd,
        nextStage,
        nextPrice,
        tokenName,
        tokenSymbol,
        presaleToken,
        tokenSold,
        tokenPercent,
        tokenDecimals,
        tokenSubDecimals,
        usdExRate,
        paymentUsd,
        paymentPrice,
        paymentAmount,
        buyAmount,
        bonusAmount,
        totalAmount,
        handlePaymentInput,
      }}
    >
      {children}
    </PresaleContext.Provider>
  );
};

export default PresaleContextProvider;
