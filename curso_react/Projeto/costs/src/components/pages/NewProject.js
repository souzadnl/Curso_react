import {useNavigate} from "react-router-dom"
import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject() {

    const history = useNavigate()

    function createPost(project) {
        // initialize cost and services

        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
        method: "POST",
        header: {
            'Content-Type': 'application/json',
        },
    }).then(((resp) => resp.json())
.then((data) => {
    console.log(data)
    //redirect
})
    ).catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>Formulário</p>

            <ProjectForm btnText="Criar Projeto"></ProjectForm>
        </div>
    )
}

export default NewProject