import styles from "./Home.module.css"
import LinkButton from "./layout/LinkButton"

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem Vindo ao <span>Costs</span></h1>
            <p>Come a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
            <img src="./logoSite.png" alt="costs"></img>
        </section>
    )
}

export default Home