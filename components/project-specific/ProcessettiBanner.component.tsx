import styles from './ProcessettiBanner.module.css';
export interface ProcessettiBannerProps {
  className?: string;
}
export const ProcessettiBanner = (props: ProcessettiBannerProps) => {
  return (
    <>
      <ion-grid class={styles.banner}>
        <div className={styles.bannerTitle}>
          <h2>Progetto ANR</h2>
          <h1>Processetti Matrimoniali</h1>
          <h2>(Venezia, XVI-XVII secolo)</h2>
        </div>
        <div className={styles.bannerImageContainer}>
          <ion-img
            class={styles.bannerImage}
            src="/processetti/banner3.jpg"
            alt="Progetto ANR Processetti"
          />
        </div>
      </ion-grid>
    </>
  );
};
