import { useState , useEffect } from 'react'
import Title from '../../pages/../Title/Title' 
import projetosImg from '../../_assets/projetos.svg'
import styles from '../Projetos/projetos.module.css'

function Projetos () {
    const [repositorios , setRepositorios ] = useState([])

    useEffect (() => {
                async function getData() {
                const response = await fetch('https://api.github.com/users/barbarasoaress18/repos')
                const data = await response.json()

                setRepositorios(data)
            }

      getData()
    }, [])

    return(
        <>
            <div className={styles.title}>
            <Title info='Outros Projetos no meu GitHub' />
            </div>

            <br/>
            <div className={styles.img}> 
            <img src={projetosImg} />
            </div>
          
          
         {repositorios.map(item => {
                return(
                  <div className={styles.repositorios} >
                    <div key={item.id}>
                        <h3> {item.name}</h3>
                        <p>{item.description}</p>
                        <a href={item.html_url}> Ver repositório </a>
                    </div>
                    </div> 
                )
                
            })}
        </>
    )
}

export default Projetos 