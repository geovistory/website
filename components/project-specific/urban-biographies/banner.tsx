import styles from './banner.module.css';

export const Banner = () => {
  return (
    <>
      <ion-grid class={styles.banner}>
        <div className={styles.bannerTitle}>
          <h1>Urban Biographies of the Roman and Late Antique Worlds</h1>
        </div>
        <div className={styles.bannerImageContainer}>
          <ion-img
            class={styles.bannerImage}
            src="/socialimage/urban-biographies.jpg"
            alt="Urban Biographies"
          />
        </div>
      </ion-grid>
    </>
  );
};

export default Banner;