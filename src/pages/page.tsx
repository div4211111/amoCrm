import { Footer, Header } from "@components/index";
import styles from "@styles/Page.module.css";

export const Page = () => {
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}>
        <div className={styles.title}>
          <h1>
            Зарабатывайте больше{" "}
            <span className={styles.accentText}>с WELBEX</span>
          </h1>
          <span className={styles.subtitle}>
            Развиваем и контролируем продажи за вас
          </span>
        </div>
        <div className={styles.info}>
          <div className={styles.infoTitle}>
            Вместе с{" "}
            <span className={styles.accentText}>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span>{" "}
            мы дарим:
          </div>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.infoItemTitle}>виджеты</span>
              <span className={styles.infoItemText}>30 готовых решений</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItemTitle}>dashboard</span>
              <span className={styles.infoItemText}>
                с показателями вашего бизнеса
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItemTitle}>skype аудит</span>
              <span className={styles.infoItemText}>
                отдела продаж и CRM системы
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItemTitle}>35 дней</span>
              <span className={styles.infoItemText}>использования CRM</span>
            </div>
          </div>
          <div className={styles.infoListMobile}>
            <div className={styles.infoItemMobile}>skype аудит</div>
            <div className={styles.infoItemMobile}>30 виджетов</div>
            <div className={styles.infoItemMobile}>dashboard</div>
            <div className={styles.infoItemMobile}>месяц amocrm</div>
          </div>
          <button className={styles.infoButton}>Получить консультацию</button>
        </div>
      </section>
      <Footer />
    </main>
  );
};
