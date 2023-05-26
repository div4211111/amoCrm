import { Link } from "react-router-dom";
import styles from "@styles/App.module.css";

function App() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to={"timer/"}>
            Перейти к таймеру
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={"page/"}>
            Перейти к верстке
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
