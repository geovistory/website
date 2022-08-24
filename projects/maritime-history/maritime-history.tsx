import {
  IonCard,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
} from '@geovistory/design-system-react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Person } from '../../components/elements/Person.component';
import { ProjectPageLayout } from '../../components/layouts/ProjectPageLayout.component';
import { ProjectPageProps } from '../../pages/project/[geov_id]';
import styles from './maritime-history.module.css';
const MaritimeHistory_component: NextPage<ProjectPageProps> = (props) => {
  const params = props.params;

  return (
    <div className={styles.theme}>
      <ProjectPageLayout {...props.projectPageLayout}>
        <IonGrid fixed class="ion-padding">
          <h1>{params.fullName}</h1>
          <p className="lead">
            Historical information about the Dutch East India Company, ready to
            explore and re-use. A pilot project.
          </p>{' '}
          <div className="restricted-width">
            <IonImg
              src="/maritime-history.jpg"
              alt="The Noord-Nieuwland in Table Bay, 1762."
            />
          </div>
          <div className="restricted-width">
            <IonLabel>
              <small>
                The Noord-Nieuwland in Table Bay, 1762. Licensing: Public
                Domain.
              </small>
            </IonLabel>
          </div>
          <p>
            Consisting of approximately twenty-five million pages, the UNESCO
            Memory of the World-listed archives of the Dutch East India Company
            (Verenigde Oost-Indische Compagnie, VOC) offer a unique view on
            interactions between European and non-European actors in Asia in the
            seventeenth and eighteenth centuries. Currently, however, doing
            research on this vast collection of handwritten documents is
            extremely challenging. Geovistory was used to integrate and
            structure various data collections related to the history of the
            Dutch East India Company. It allowed to quickly and easily create
            insightful visualizations. The semantic data produced with
            Geovistory is now available to search, explore and re-use.
          </p>
          <h4>Involved People</h4>
          <p>
            <IonRow>
              <IonCol size="6">
                <Person
                  name="Dr. Lodewijk Petram"
                  description="Project Leader Globalise"
                />
              </IonCol>
              <IonCol size="6">
                <Person
                  name="Sebastiaan Derks M.A."
                  description="Head of Digital Data Management"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <Person
                  name="Habil. Dr. Francesco Beretta"
                  description="Founder Digital History Team LARHRA"
                />
              </IonCol>
              <IonCol size="6">
                <Person
                  name="Jonas Schneider M.A."
                  description="Co-director & CTO KleioLab"
                />
              </IonCol>
            </IonRow>
          </p>
          <h4>Institutional Partners</h4>
          <p>
            <IonRow>
              <IonCol size="4">
                <Image
                  src="/kleiolab-logo.png"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="KleioLab logo"
                />
              </IonCol>
              <IonCol size="4">
                <Image
                  src="/huygens-institute.png"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Logo Huygens Institute"
                />
              </IonCol>
              <IonCol size="4">
                <Image
                  src="/larhra-logo.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Logo LARHRA"
                />
              </IonCol>
            </IonRow>
          </p>
        </IonGrid>
      </ProjectPageLayout>
    </div>
  );
};

export default MaritimeHistory_component;
