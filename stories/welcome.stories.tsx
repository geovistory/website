import { defineCustomElements } from '@geovistory/design-system-web/loader';
import { version } from '../package.json';
defineCustomElements();

export default {
  title: 'Welcome',
  parameters: {
    previewTabs: { canvas: { hidden: true } },
    options: { showPanel: false },
  },
};

export const Welcome = () => (
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>
          Geovistory Website – Developer Documentation{' '}
          <ion-text color="medium" style={{ fontSize: '1rem' }}>
            v{version}
          </ion-text>
        </h1>
        <p className="lead">
          This is a developer documentation for contributers of the geovistory
          website.
        </p>
      </ion-grid>
    </ion-content>
  </ion-app>
);
