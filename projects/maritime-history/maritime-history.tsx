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
        <ion-grid fixed class="ion-padding">
          <h1>{params.fullName}</h1>
          <p className="lead">
            Historical information about the Dutch East India Company, ready to
            explore and re-use. A pilot project.
          </p>{' '}
          <div className="restricted-width">
            <ion-img
              src="/maritime-history.jpg"
              alt="The Noord-Nieuwland in Table Bay, 1762."
            />
          </div>
          <div className="restricted-width">
            <ion-label>
              <small>
                The Noord-Nieuwland in Table Bay, 1762. Licensing: Public
                Domain.
              </small>
            </ion-label>
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
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Dr. Lodewijk Petram"
                  description="Project Leader Globalise"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Sebastiaan Derks M.A."
                  description="Head of Digital Data Management"
                />
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="6">
                <Person
                  name="Habil. Dr. Francesco Beretta"
                  description="Founder Digital History Team LARHRA"
                />
              </ion-col>
              <ion-col size="6">
                <Person
                  name="Jonas Schneider M.A."
                  description="Co-director & CTO KleioLab"
                />
              </ion-col>
            </ion-row>
          </p>
          <h4>Institutional Partners</h4>
          <p>
            <ion-row>
              <ion-col size="4">
                <Image
                  src="/kleiolab-logo.png"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="KleioLab logo"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/huygens-institute.png"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Logo Huygens Institute"
                />
              </ion-col>
              <ion-col size="4">
                <Image
                  src="/larhra-logo.jpg"
                  width={150}
                  height={150}
                  objectFit={'scale-down'}
                  alt="Logo LARHRA"
                />
              </ion-col>
            </ion-row>
          </p>
        </ion-grid>
      </ProjectPageLayout>
    </div>
  );
};

export default MaritimeHistory_component;
