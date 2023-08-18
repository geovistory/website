import styles from './ProcessettiBanner.module.css';
export interface ProcessettiBannerProps {}
export const ProcessettiBanner = () => {
  return (
    <>
      <ion-grid class={styles.banner}>
        <h1>
          Progetto <br /> ANR Processetti
        </h1>
        <div className={styles.bannerImageContainer}>
          <ion-img
            class={styles.bannerImage}
            src="/processetti-main.jpg"
            alt="Progetto ANR Processetti"
          />
        </div>
      </ion-grid>
      <ion-grid class={styles.sectionPrimary}>
        Progetto ANR Processetti
      </ion-grid>
    </>
  );
};
