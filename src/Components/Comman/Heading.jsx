import GradientText from "./GradientText";

const Heading = ({headingText, headingTitle, animation}) =>{
    return(
        <>
            <div className="heading-box" data-aos={animation} data-aos-delay="300" data-aos-duration="2000">
                <GradientText  gradientText={headingText}/>
                <h2>{headingTitle}</h2>
            </div>
        </>
    );
};
export default Heading;