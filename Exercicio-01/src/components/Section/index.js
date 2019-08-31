import React from 'react';
import "./styles.css";


const Section = () => (
   
    <section className="main-section">
        <div className="destaques">
        <div className="destaques__principal caixa">
                <h3 className="destaques__titulo">Fortnite</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">PUBG</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">Slack</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">Whatsapp</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">CS: GO</h3>
            </div>
            <div className="destaques__categorias">
                <ul className="destaques__categorias___lista">
                    <li className="destaques__categorias___item">
                        <a className="destaques__categorias___link" href="#">
                            <i className="destaques__categorias___icone fab fa-buromobelexperte"></i>
                            Aplicativos populares
                        </a>
                    </li>
                    <li className="destaques__categorias___item">
                        <a className="destaques__categorias___link" href="#">
                            <i className="fas fa-list-ol"></i>
                            Jogos populares
                        </a>
                    </li>
                    <li className="destaques__categorias___item">
                        <a className="destaques__categorias___link" href="#">
                            <i className="far fa-star"></i>
                            Em Destaque
                        </a>
                    </li>
                    <li className="destaques__categorias___item">
                        <a className="destaques__categorias___link" href="#">
                            <i className="far fa-bell"></i>
                            Lançamentos
                        </a>
                    </li>
                </ul>
            </div>
            </div>
    </section>
   

);

export default Section;