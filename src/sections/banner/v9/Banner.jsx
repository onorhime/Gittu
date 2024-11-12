import { useState, useEffect } from "react";
import BannerWrapper from "./Banner.style";
import { NavLink } from "react-router-dom";
import DocumentIcon from "../../../assets/images/icons/document-text.svg";
import PresaleLiveTextIcon from "../../../assets/images/icons/presale-live-text.svg";
import Abstrac1 from "../../../assets/images/banner/abstrac-1.png";
import Abstrac2 from "../../../assets/images/banner/abstrac-2.png";
import { FiArrowDownRight } from "react-icons/fi";
import { HiArrowLeft } from "react-icons/hi2";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";
import Button from "../../../components/button/Button";
import SmoothSlider from "../../../components/smooth-slider/SmoothSlider";
import Progressbar from "../../../components/progressbar/Progressbar";
import Countdown from "../../../components/countdown/Countdown";
import Dropdown from "../../../components/dropdown/Dropdown";
import BannerData from "../../../assets/data/bannerV9";
import TokenInfo from "../../../components/tokenInfo/TokenInfo";
import StatusIcon from "../../../assets/images/icons/status.png";
import { usePresaleData } from "../../../utils/PresaleContext";

const Banner = () => {
  const {
    bnbChainId,
    ethChainId,
    userChainId,
    userBalance,
    currentStage,
    currentBonus,
    currentPrice,
    stageEnd,
    tokenSymbol,
    presaleToken,
    tokenSold,
    tokenPercent,
    paymentUsd,
    paymentAmount,
    buyAmount,
    bonusAmount,
    presaleStatus,
    handlePaymentInput,
    buyToken,
  } = usePresaleData();

  const [isBuyNow, setIsBuyNow] = useState(false);

  const buyNowHandle = () => {
    setIsBuyNow(false);
  };

  const [softCap, setSoftCap] = useState("10 ETH");
  const [hardCap, setHardCap] = useState("40 ETH");

  useEffect(() => {
    if (isBuyNow) {
      document.querySelector(".gittu-banner-card").classList.add("flip");
    }

    if (!isBuyNow) {
      document.querySelector(".gittu-banner-card").classList.remove("flip");
    }
  }, [isBuyNow]);

  return (
    <BannerWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="gittu-banner-left">
              <h1 className="banner-title">{BannerData.title}</h1>
              <h2 className="text-white">{BannerData.titleExtra}</h2>
              <h5 className="mt-15">{BannerData.subtitle}</h5>

              <div className="mt-40 mb-40">
                <a
                  className="whitepaper-btn"
                  href={Whitepaper}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={DocumentIcon} alt="icon" />
                  Whitepaper
                </a>
              </div>

              <ul className="gittu-banner-list">
                <li>Total Supply: {presaleToken}</li>
                <li>Soft Cap: {softCap}</li>
                <li>Hard Cap: {hardCap}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gittu-banner-right">
             
              <div className="gittu-banner-card">
                <div className="gittu-banner-card-inner">
                  <div className="bg-shape">
                    <div className="bg-shape-img img-1">
                      <img src={Abstrac1} alt="shape" />
                    </div>
                    <div className="bg-shape-img img-2">
                      <img src={Abstrac2} alt="shape" />
                    </div>
                  </div>

                  {
                    <><div className="card-content">

                      <h5 className="fw-600 text-white text-uppercase">
                        Activation ends in
                      </h5>

                      <div className="mt-1 mb-17">
                        <Countdown endDate={stageEnd} />
                      </div>

                      <div className="mb-15">
                        <Progressbar done={30} />
                      </div>




                      <NavLink to='/activate'>
                        <Button size="large">
                          Activate
                        </Button>
                      </NavLink>

                    </div>
                    <br /><br />
                    <div className="card-content">

                        <h5 className="fw-600 text-white text-uppercase">
                          Unlocking ends in
                        </h5>

                        <div className="mt-1 mb-17">
                          <Countdown endDate={stageEnd} />
                        </div>

                        <div className="mb-15">
                          <Progressbar done={30} />
                        </div>




                        <NavLink to='/unlock'>
                          <Button size="large">
                            Unlock
                          </Button>
                        </NavLink>

                      </div></>
                  }
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="gittu-banner-slider">
        <SmoothSlider />
      </div>
    </BannerWrapper>
  );
};

export default Banner;
