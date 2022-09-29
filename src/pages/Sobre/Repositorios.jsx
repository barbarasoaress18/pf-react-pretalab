import projetos from './data'
import styles from '.../../repositorios.module.css'
import Title from '../../Title/Title'



function Repositorios() {
    return(
            <>
               
          
          <div className={styles.containerProject}>
            <div className={styles.tituloProject}>
            <Title info= '2 projetos desenvolvidos durante o Curso Formativo Básico PretaLab.' />
            
            <br/>
            </div>
            
            <div className={styles.projetos} > 
            {projetos.map(projetos => {
                    return(
                        <div key={projetos.id}>
                            <br/>
                            <h2> {projetos.nome} </h2>
                            <br/>
                            <p> {projetos.descrição} </p>
                            <br/>
                            <img src={projetos.imagem} />
                            <br/>
                            <a href={projetos.link}> </a>

                            <br/>

                            
                        </div>
                    )
                })}
              
                
            </div>
          </div>
        </> 

    )
    }

  export default Repositorios