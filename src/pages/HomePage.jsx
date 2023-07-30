import React from 'react'
import "./HomePage.css"

const HomePage = () => {
    return (
        <>
            <div className="containerhome">
                <div className='containerLogo' > <img className="logonav" src="./images/logoBrancaJPG.jpg" alt="Logo clikar" /> </div>
                <div className="navitens">
                    <ul>
                        <a className="navbar-itens" href="">Home</a>
                        <a className="navbar-itens" href="">Sobre Nós</a>
                        <a className="navbar-itens" href="">Serviços</a>
                        <a className="navbar-itens" href="">Clientes</a>
                        <a className="navbar-itens" href="">Contato</a>
                    </ul>
                </div>
                <div className="home" >
                    

                    <h1> 
                        <span>OPTIMIZANDO</span> ELÉTRICAS <br></br> CORPORATIVAS
                    </h1>

                    <h2>
                        ELETRICISTAS ESPECIALIZADOS <br></br> EM <span>SOLUÇÕES CORPORATIVAS</span>
                    </h2>

                    
                </div>
            </div>
            

        </>
    )
}

export default HomePage