import { useState , useEffect } from 'react'
import styles from '.../../comentarios.module.css'
import comentariosImg from '../../_assets/comentarios.svg'
import { FiPlus , FiTrash2 } from 'react-icons/fi'
import { nanoid } from 'nanoid'


const Comentarios = () =>  {
        const getLocalList = () => {
            let items = localStorage.getItem('list')
          
            if (items) {
              return JSON.parse(localStorage.getItem('list'))
            } else {
              return []
            }
          }
          
          const [list, setList] = useState(getLocalList)
          const [newTask, setNewTask] = useState('')
        
          function handleCreateNewTask() {
            // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
            const task = {
              id: nanoid(),
              title: newTask,
              isComplete: false
            }
        
            if(task.title === '') {
              return
            }
        
            setList([...list, task])
            setNewTask('')
          }
        
          function handleRemoveTask(id) {
            // Remova uma task da listagem pelo ID
            const tasksFiltered = list.filter(task => task.id !== id)
            setList(tasksFiltered)
          }
        
          //salvar na localStorage
          useEffect(() => {
            localStorage.setItem('list', JSON.stringify(list))
          }, [list])
        
          return (
            <>
              <div className={styles.header}>
                <h1>
                  Deixe um comentário
                </h1>
                <img src={comentariosImg} />
              </div>
             
              <div className={styles.inputContainer}>
                <input 
                  className={styles.input}
                  type="text" 
                  placeholder="Digite aqui" 
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                />
                <div className={styles.addContainer}>
                  <button className={styles.addTask} type="submit" onClick={handleCreateNewTask}>
                    <FiPlus size={16} color="#fff"/>
                  </button>
                </div>
              </div>
            
              <main>
                <ul className={styles.listItems}>
                  {list.map(task => {
                    return(
                      <li key={task.id}>
                        <div>
                          <p>{task.title}</p>
                        </div>
                        <button className={styles.removeTask} type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}>
                          <FiTrash2 size={16}/>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </main>
            </>
            
          )
        }


 export default Comentarios 