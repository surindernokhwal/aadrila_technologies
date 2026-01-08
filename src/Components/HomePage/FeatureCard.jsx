import Button from "../Comman/Button";

const FeatureCard = ({
    badgeText,
    featureTitle,
    featureSubTitle1,
    featureSubTitle2,
    featureList1,
    featureList2,
    url1,
    url2,
    btnText1,
    btnText2,
    featureImg,
    featureImgBg,
    featureDot1,
    featureDot2,
    animationContent,
    animationContent2
}) => {
    return (
        <>
            <div className="feature-inner-content">
                <div className="feature-box-content" data-aos={animationContent} data-aos-delay="300" data-aos-duration="2000">
                    <div className="feature-badge">
                        <span className="feature-bade-text">{badgeText}</span>
                    </div>
                    <h3>{featureTitle}</h3>
                    <p>{featureSubTitle1}</p>
                    <ul>
                        {featureList1.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{featureSubTitle2}</p>
                    <ul>
                        {featureList2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="feature-btn">
                        <Button url={url1} btnText={btnText1} />
                        <Button url={url2} btnText={btnText2} />
                    </div>
                </div>
                <div className="feature-box-img" data-aos={animationContent2} data-aos-delay="300" data-aos-duration="2000">
                    <div className="feature-img">
                        <img src={featureImg} alt={featureImg} />
                    </div>
                    <div className="feature-img-bg">
                        <img src={featureImgBg} alt={featureImgBg} />
                    </div>
                </div>
                {featureDot1 && 
                    <div className="feature-dot1">
                        <img src={featureDot1} alt="featureDot1" />
                    </div>
                }
                {featureDot2 &&
                <div className="feature-dot2">
                    <img src={featureDot2} alt="featureDot2" />
                </div>
                }
            </div>
        </>
    );
};
export default FeatureCard;
