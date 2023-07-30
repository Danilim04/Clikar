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
                    <img className="imghome" src="./images/img-e-sombra.png" alt="sombra da imagem principal" />
                    <img className="img-home-cel" src="./images/img-home-celular.png" alt="imagem principal" />
                </div>
            </div>
        </>
    )
}

export default HomePage