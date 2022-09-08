import styles from './ProjectFooter.module.css';
export interface ProjectFooterProps {
  showEeditiones: boolean;
}

export const ProjectFooter = (props: ProjectFooterProps) => {
  return (
    <ion-grid>
      <ion-row>
        <ion-col class={styles.container}>
          <ion-card
            button={true}
            href="/"
            target="_blank"
            class={styles.card}
          >
            <div className={styles.cardContent}>
              <div>Powered by</div>
              <ion-img
                class={styles.logoGeovistory}
                src={'/geovistory-logo.svg'}
              />
            </div>
          </ion-card>
          {props.showEeditiones && (
            <ion-card
              button={true}
              href="https://e-editiones.org/"
              target="_blank"
              class={styles.card}
            >
              <div className={styles.cardContent}>
                <div>Powered by</div>
                <ion-img
                  class={styles.logoEeditiones}
                  src={'/e-editiones-logo-bw.svg'}
                />
              </div>
            </ion-card>
          )}
        </ion-col>
      </ion-row>
    </ion-grid>
  );
};
