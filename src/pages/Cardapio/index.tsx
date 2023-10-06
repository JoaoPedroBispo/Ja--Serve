import styles from './Cardapio.module.scss';
import logo from 'assets/logo.png'
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros/index';

export default function Cardapio(){
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);

    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="logo" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                Com a qualidade e e preço baixo que voçê precisa.
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Produtos</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />
            </div>
            </section>
            
        </main>
    );
}