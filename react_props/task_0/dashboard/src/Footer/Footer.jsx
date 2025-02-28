import './Footer.css'
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";


const currentYear = getCurrentYear();
const footerCopy = getFooterCopy(false);

function Footer() {
    return (
        <>
            <div className="App-footer">
                <p>Copyright {currentYear} - {footerCopy}</p>
            </div>
        </>
    );
}

export default Footer;
