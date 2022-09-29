import styles from '.../../home.module.css'
import homeImg from '../../_assets/home-img.svg'

function Home() {
    return (
        <>
          <div className={styles.header}>
          </div>
          <div className={styles.subtitulo}>
            <img className={styles.imagemCard} src={homeImg} />
            Estou fazendo migração de carreira aos 22 anos, formada em Recursos Humanos e trabalhando com Licitações Públicas, esse é o meu Site. Que me auxilirá a entrar no mercado da Programação.
          </div>
          <div className={styles.containerSobre}>
            <div className={styles.tituloSobre}>
              Vem conhecer um pouquinho sobre quem é a criadora do site.
              E como eu decidi migrar para o mundo da programação, afim de me tornar uma desenvolvedora.
            </div>
          </div>
        </> 
      )
    }
 

export default Home 