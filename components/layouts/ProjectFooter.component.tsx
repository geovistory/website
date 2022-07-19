import {
  IonCard,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
} from '@geovistory/design-system-react';
import styles from './ProjectFooter.module.css';
export interface ProjectFooterProps {}

export const ProjectFooter = (props: ProjectFooterProps) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol className={styles.container}>
          <IonCard
            button={true}
            href="/"
            target="_blank"
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <div>Powered by</div>
              <IonImg
                className={styles.logoGeovistory}
                src={'/geovistory-logo.svg'}
              />
            </div>
          </IonCard>
          <IonCard
            button={true}
            href="https://e-editiones.org/"
            target="_blank"
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <div>Powered by</div>
              <IonImg
                className={styles.logoEeditiones}
                src={'/e-editiones-logo-bw.svg'}
              />
            </div>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
