import '../styles/Footer.css';
import logo from '../assets/personal_logo_white.png';
import git from '../assets/github_logo.png';
import linkedin from '../assets/linkedin_logo.png';

function Footer() {
    return (
        <footer class="site-footer">
            <div class="container"> 
                <div class="row">
                    <div class="col-sm-12 col-md-3"> 
                        <img src={logo}
                            width="80px"
                            height="80px" />
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <h6>About</h6>
                        <p class="text-justify"> Thank you for visiting! </p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Contact Me</h6>
                        <ul class="footer-links">
                            <li><a href="">LinkedIn</a></li>
                            <li><a href="">Email</a></li>
                            <li><a href="">Phone</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

