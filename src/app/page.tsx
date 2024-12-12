import Botao from "./components/botao";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className={styles.titulo}> MINHA HOME PAGE</h1>
      </div>
      <div style={{ margin: "3rem" }}>
        <Botao></Botao>
      </div>
    </div>
  );
}
