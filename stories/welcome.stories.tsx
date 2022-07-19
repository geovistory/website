import {
  IonApp,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonText,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
} from '@geovistory/design-system-react';
import { version } from '../package.json';
export default {
  title: 'Welcome',
  parameters: {
    previewTabs: { canvas: { hidden: true } },
    options: { showPanel: false },
  },
};

export const Welcome = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>
          Geovistory Website – Developer Documentation{' '}
          <IonText color="medium" style={{ fontSize: '1rem' }}>
            v{version}
          </IonText>
        </h1>
        <p className="lead">
          This is a developer documentation for contributers of the geovistory
          website.
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
