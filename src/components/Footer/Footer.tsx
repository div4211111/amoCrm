import { memo } from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as TelegramLogo } from "@assets/telegram.svg";
import { ReactComponent as ViberLogo } from "@assets/viber.svg";
import { ReactComponent as WhatsappLogo } from "@assets/whatsapp.svg";

const Footer = memo(({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={styles.footer} {...props}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.footerSectionTitle}>о компании</div>
          <div className={styles.footerSectionContent}>
            <ul className={styles.footerSectionList}>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Партнерская программа</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Вакансии</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerSectionTitle}>меню</div>
          <div className={styles.footerSectionContent}>
            <ul className={styles.footerSectionList}>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Расчет стоимости</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Услуги</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Виджеты</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Интеграции</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Наши клиенты</Link>
              </li>
            </ul>
            <ul className={styles.footerSectionList}>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Благодарность клиентов</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Кейсы</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Сертификаты</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Блог на Youtube</Link>
              </li>
              <li className={styles.footerSectionListItem}>
                <Link to={"/page"}>Вопрос / Ответ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerSectionTitle}>Контакты</div>
          <div className={styles.footerSectionContacts}>
            <a href="tel:+75555555555" className={styles.footerPhone}>
              +7 555 555-55-55
            </a>
            <div className={styles.footerSocials}>
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
            <span className={styles.footerAddress}>
              Москва, Путевой проезд 3с1, к 902
            </span>
          </div>
        </div>
      </div>
      <div className={styles.footerRools}>
        <span>©WELBEX 2022. Все права защищены.</span>
        <a href="/page">Политика конфиденциальности</a>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export { Footer };
