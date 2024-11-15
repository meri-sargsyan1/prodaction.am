import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer>
            <div className="ikona">
                <div className="fb">
                    <a href="https://www.facebook.com/gsproduction.am" rel='noreferrer' target="_blank">
                        <i className="fa fa-facebook-square" style={{fontSize: 36}}></i>
                    </a>
                </div>
                <div className="inst">
                    <a href="https://www.instagram.com/gsproduction.am/" rel='noreferrer' target="_blank">
                        <i className="fa fa-instagram" style={{fontSize: 36}}></i>
                    </a>
                </div>
                <div className="tw">
                    <a href="">
                        <i className="fa fa-twitter" style={{fontSize: 36}}></i>
                    </a>
                </div>
                <div className="in">
                    <a href="">
                        <i className="fa fa-linkedin" style={{fontSize: 36}}></i>
                    </a>
                </div>
            </div>
            <div className="kapmezhet">
                <h3>Կապը մեզ հետ</h3>
                <div className="gs-content">
                    <i className="fa fa-map-marker"></i>
                    <span>Կիևյան 16, Քաղաք Երևան</span>
                </div>
                <div className="gs-content">
                    <i className="fa fa-phone"></i>
                    <span>Phone: +374 91 693 786</span>
                </div>
                <div className="gs-content">
                    <i className="fa fa-envelope"></i>
                    <span>Email: info@gsproduction.am</span>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;