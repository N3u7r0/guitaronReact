import React from 'react';
import instagram from "../../assets/images/logosfooter/instagram.png";
import facebook from "../../assets/images/logosfooter/facebook.png";
import whatsapp from "../../assets/images/logosfooter/whatsapp.png";
import "./Footer.css";
export const Footer = () => {

    return (
        <footer >
            <h4>Contacto</h4>
            <li className='liFooter'>
                <ul className='ulFooter'>
                    <img className='logoFooter' src={instagram} alt="logo insta" />
                    <h6>Instagram:www.instagram/guitaron-ok</h6>
                </ul>
                <ul className='ulFooter'>
                    <img className='logoFooter' src={facebook} alt="logo face" />
                    <h6>Instagram:www.instagram/guitaron-ok</h6>
                </ul>
                <ul className='ulFooter'>
                    <img className='logoFooter' src={whatsapp} alt="logo wpp" />
                    <h6>Instagram:www.instagram/guitaron-ok</h6>
                </ul>
            </li>
        </footer>
    )

}
export default Footer;