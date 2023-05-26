import { memo } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "@assets/logo_welbex.svg";
import { ReactComponent as TelegramLogo } from "@assets/telegram.svg";
import { ReactComponent as ViberLogo } from "@assets/viber.svg";
import { ReactComponent as WhatsappLogo } from "@assets/whatsapp.svg";

const Header = memo(({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.headerLine}>
        <div className={styles.headerLeft}>
          <Link to="/page" className={styles.headerLogo}>
            <Logo />
          </Link>
          <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavItem}>
                <Link to="/page">Услуги</Link>
              </li>
              <li className={styles.headerNavItem}>
                <Link to="/page">Виджеты</Link>
              </li>
              <li className={styles.headerNavItem}>
                <Link to="/page">Интеграции</Link>
              </li>
              <li className={styles.headerNavItem}>
                <Link to="/page">Кейсы</Link>
              </li>
              <li className={styles.headerNavItem}>
                <Link to="/page">Сертификаты</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <a href="tel:75555555555" className={styles.headerPhone}>
            +7 555 555-55-55
          </a>
          <div className={styles.headerSocials}>
            <a href="https://telegram.org">
              <TelegramLogo />
            </a>
            <a href="https://viber.com">
              <ViberLogo />
            </a>
            <a href="https://whatsapp.com">
              <WhatsappLogo />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.headerLine}>
        <span className={styles.headerTitle}>
          крупный интегратор CRM в России и еще 8 странах
        </span>
      </div>
    </header>
  );
});

Header.displayName = "Header";
export { Header };
