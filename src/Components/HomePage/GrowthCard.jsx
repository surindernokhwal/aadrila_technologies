const GrowthCard = ({growthIcon,growthBoxTitle,growthBoxText}) =>{
    return(
        <>
            <div className="growth-box">
                <div className="growth-icon">
                    <img src={growthIcon} alt={growthBoxTitle} />
                </div>
                <h3>{growthBoxTitle}</h3>
                <p>{growthBoxText}</p>
            </div>
        </>
    )
}
export default GrowthCard;