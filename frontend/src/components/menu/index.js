import React, { useState } from 'react'
import './menu.css'

function Menu(){
    const[menuItems, setMenuItems] = useState(["Início", "Registrar Ponto", "Pendências",
    "Relatório de Jornada", "Ativar/Desativar", "Definir Coordenador",
    "Definir Férias", "Adicionar Funcionário", "Alterar Registro", "Extrair Dados"]);


    return(
        <div className="sidebar">
            <div className="menu">
                <ul className="menu-list">
                    {menuItems.map( item => (
                        <a href="/"><li className="menu-item">{item}</li></a>
                    ))}
                </ul>
            </div>

            <header className="profile">
                <div className="profile-pic">
                </div>
                <div className="profile-info">
                    <p className="profile-name">Candido Canaan de Carvalho Rocha Figueiredo</p>
                    <p className="profile-number">Matrícula</p>
                    <p className="profile-admission">Data de Admissão</p>
                </div>
            </header>

            <footer className="footer">
                <p className="footer-text">Todos os direitos reservados - 2021</p>
                <a href="https://www.instagram.com/torresluizg" className="footer-link">Contato</a>
            </footer>
        </div>
    )
}
export default Menu