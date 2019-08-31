import React from 'react';
import "./styles.css";

const Header = () => (
    <header className="main-header">
        <nav class="menu">
            <ul class="menu__lista">
                <li class="menu__item">
                    <a class="menu__link ativo" href="#">
                        <i class="fas fa-home"></i>
                        Início
                    </a>
                    <a class="menu__link" href="#">
                        <i class="fas fa-mobile-alt"></i>
                        Aplicativos</a>
                    <a class="menu__link" href="#">
                        <i class="fas fa-gamepad"></i>
                        Jogos
                    </a>
                </li>
            </ul>
        </nav>
    </header>

);

export default Header;