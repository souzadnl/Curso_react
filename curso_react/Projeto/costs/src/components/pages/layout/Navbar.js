import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src="./logoSite.png" width="50px"></img></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/company">Empresa</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                    <li className={styles.item}><Link to="/newproject">Novo Projeto</Link></li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                </ul>
                
            </Container>
        </nav>
    )
}

export default Navbar