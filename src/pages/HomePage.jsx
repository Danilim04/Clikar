import React from 'react'
import "./HomePage.css"

import { useState } from 'react';
import "./HomePage.css";

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="containerhome">
                <div className={`containerLogo ${menuOpen ? 'on' : ''}`}>
                    <img className={`logonav ${menuOpen ? 'logonavhidden' : ''}`} src="./images/logoBrancaJPG.jpg" alt="Logo clikar" />

                    <div onClick={toggleMobileMenu} className='menu-toggle'>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className='three'></div>
                    </div>

                    <div className={`navitens-mobile ${menuOpen ? '' : 'navitens-mobilehidden'}`}>
                        <ul>
                            <a className="navbar-itens" href="">HOME</a>
                            <a className="navbar-itens" href="">SOBRE NÓS</a>
                            <a className="navbar-itens" href="">SERVIÇOS</a>
                            <a className="navbar-itens" href="">CLIENTES</a>
                            <a className="navbar-itens" href="">CONTATO</a>
                        </ul>
                    </div>
                    
                <div className="navitens">
                    <ul>
                        <a className="navbar-itens" href="">Home</a>
                        <a className="navbar-itens" href="">Sobre Nós</a>
                        <a className="navbar-itens" href="">Serviços</a>
                        <a className="navbar-itens" href="">Clientes</a>
                        <a className="navbar-itens" href="">Contato</a>
                    </ul>
                </div>
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