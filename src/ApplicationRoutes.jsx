import { BrowserRouter , Routes , Route } from "react-router-dom";

import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Comentarios from './pages/Comentarios/Comentarios'
import Contato from './pages/Contato/Contato'
import Projetos from './pages/Projetos/Projetos'
import Sobre from './pages/Sobre/Sobre mim'



function ApplicationRoutes() {
    return(
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/comentarios" element={<Comentarios />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/sobre" element={<Sobre/>} />
                    <Route path="/projetos" element={<Projetos/>} />
                    
                </Routes>
                <Footer/>
            </BrowserRouter> 
                
        </>
    )
}

export default ApplicationRoutes