import styles from "../styles/botao.module.css";

export default function Botao(mensagem: string) {
  return (
    <a className={styles.layout} href="/sobre">
      {mensagem}
    </a>
  );
}
