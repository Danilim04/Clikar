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
                    <div className='container-text-home' >
                        <div className='text-home' >
                            <h1>
                                <span>OPTIMIZANDO</span> ELÉTRICAS<br /> CORPORATIVAS
                            </h1>
                            <h2>
                                ELETRICISTAS ESPECIALIZADOS <br /> EM <span>SOLUÇÕES CORPORATIVAS</span>
                            </h2>
                            <button className='botao-home' > Faça seu Orçamento </button>
                        </div>

                    </div>



                </div>

                <div className="clientbar">

                </div>

            </div>


        </>
    )
}

export default HomePage