import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer=()=>{
    return(
        <>
        <footer>
            <div className="container container-flex">
                <div className='icons'>
                    <a href='https://mobile.twitter.com/cbigdtuw'>
                    <TwitterIcon className='icon' />
                    </a>
                    <a href='https://www.instagram.com/celestialbiscuit/'>
                    <InstagramIcon className='icon'/>
                    </a>
                    <a href='https://www.linkedin.com/company/celestial-biscuit-igdtuw/'>
                    <LinkedInIcon className='icon'/>
                    </a>
                </div>
                <div className='line'>
                    

                </div>
                <div className='copyright'>
                    <p>All Rights Reserved &copy;</p>
                </div>

            </div>
        </footer>
        </>
    )

}
export default Footer;