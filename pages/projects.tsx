import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';
import styles from './data.module.css';
export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}
const Page: NextPage<ResourcesProps> = (props) => {
  const router = useRouter();

  return (
    <DefaultPage
      {...props.defaultPage}
      noPaddingSlot={
        <div className={styles.container}>
          <ion-grid class={`ion-padding ${styles.banner}`}>
            <h1 className={styles.title1}>
              Projects
              {/* <ion-button href="" fill="none">
                <ion-icon icon={rocketOutline}></ion-icon>
              </ion-button> */}
            </h1>
            <p className={styles.title2 + ' lead'}>
              Created by the Geovistory Community{' '}
            </p>

            <p>
              <ion-list>
                {projectsParams
                  .filter((p) => p.listed)
                  .sort((a, b) => a.shortName.localeCompare(b.shortName))
                  .map((p) => (
                    <ion-item key={p.geovID} href={'project/' + p.geovID}>
                      <ion-avatar aria-hidden="true" slot="start">
                        <ion-img alt={p.shortName} src={p.headOgImage} />
                      </ion-avatar>
                      <ion-label>
                        <h2>{p.shortName}</h2>
                        <p className="ion-text-wrap">{p.description}</p>
                      </ion-label>
                    </ion-item>
                  ))}
              </ion-list>
            </p>
          </ion-grid>
        </div>
      }
    ></DefaultPage>
  );
};

export default Page;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      defaultPage: {
        head: {
          headTitle: 'Community Data',
          headOgDescription: 'Access linked open and FAIR research data.',
          headOgImage: null,
        },
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
