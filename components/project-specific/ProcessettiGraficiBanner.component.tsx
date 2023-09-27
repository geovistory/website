import styles from './ProcessettiBanner.module.css';
export interface ProcessettiBannerProps {
}
export const ProcessettiGraficiBanner = () => {
  return (
    <>
      <ion-grid class={styles.banner}>
        <h1>Grafici e tabelle</h1>
        <div className={styles.bannerImageContainer}>
          <ion-img
            class={styles.bannerImage}
            src="/processetti-main.jpg"
            alt="Progetto ANR Processetti"
          />
        </div>
      </ion-grid>
      <ion-grid class={styles.sectionPrimary}>Grafici e tabelle </ion-grid>
    </>
  );
};
