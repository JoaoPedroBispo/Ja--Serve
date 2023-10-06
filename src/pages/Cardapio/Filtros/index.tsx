import styles from './Filtros.module.scss';
import filtros from './filtros.json';


type IOpcao = typeof filtros[0];

type FiltrosProps = {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({filtro, setFiltro}: FiltrosProps) {
    function selectFilter(option: IOpcao) {
        return setFiltro(option.id);
      }

    return (
        <div className={styles.filtro}>
            {filtros.map((opcao)  => (
                <button key={opcao.id} onClick={() => selectFilter(opcao)} className={`${styles.filtro__filtro} ${filtro === opcao.id ? styles['filtro__filtro--ativo'] : ""}`}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}