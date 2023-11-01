import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import styles from "../Footer.module.css"

function Footer() {
    return(
        <footer className={styles.social_list}>Rodapé <br></br>
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
        </footer>
        
    )
}

export default Footer