import { Link } from 'react-router-dom';

const Button =({url,btnText})=>{
    return(
        <>
            <Link to={url} className="common-btn">
                    {btnText}
            </Link>
        </>
    );
};

export default Button;