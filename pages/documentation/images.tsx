import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  DefaultPage,
  DefaultPageProps,
} from '../../components/layouts/DefaultPage.component';
import { projectsParams } from '../../lib/projectParams';
import styles from './images.module.css';
export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}
const Resources: NextPage<ResourcesProps> = (props) => {
  const router = useRouter();

  return (
    <DefaultPage
      {...props.defaultPage}
      noPaddingSlot={
        <div className={styles.container}>
          <h1>Images</h1>
          <p>
            This website uses these breakpoints for the responsive design:{' '}
            <a
              href="https://ionicframework.com/docs/api/grid#default-breakpoints"
              target="_blank"
              rel="noreferrer"
            >
              breakpoints
            </a>
          </p>
          <p>
            This table shows the required image width for different display
            sizes:
            <table className={styles.table}>
              <thead>
                <tr>
                  <td>display</td>
                  <td>min width</td>
                  <td>max width</td>
                  <td>required image width (for retina displays)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>xl</td>
                  <td>1200px</td>
                  <td>infinite</td>
                  <td>infinite</td>
                </tr>
                <tr>
                  <td>lg</td>
                  <td>992px</td>
                  <td>1200px</td>
                  <td>2400px</td>
                </tr>
                <tr>
                  <td>md</td>
                  <td>768px</td>
                  <td>992px</td>
                  <td>1984px</td>
                </tr>
                <tr>
                  <td>sm</td>
                  <td>576px</td>
                  <td>768px</td>
                  <td>1536px</td>
                </tr>
                <tr>
                  <td>xs</td>
                  <td>0px</td>
                  <td>576px</td>
                  <td>1152px</td>
                </tr>
                <tr>
                  <td>fixed grid*</td>
                  <td> </td>
                  <td>1140px</td>
                  <td>2280px</td>
                </tr>
              </tbody>
            </table>
          </p>
          <p>
            * Content wrapped in a fixed grid limits to a maximum width for
            large displays.{' '}
          </p>
          <h2>Broken image source</h2>
          <ion-grid fixed>
            <p>
              Each image needs an alt attribute. This specifies an alternate
              text for the image, if the image for some reason cannot be
              displayed
            </p>
            <ion-img src="/xyz" alt="This is the alt attribute" />
          </ion-grid>
          <ion-grid fixed>
            <h2>Fixed grid</h2>
            <p>
              The following elements are wrapped into a fixed grid with max
              width of 1140px
            </p>

            <p>provided images: xs, sm, md, lg, xl</p>
            <ion-img
              class="ion-hide-sm-up"
              src="/placeholders/xs.png"
              alt="generali-sito"
            />
            <ion-img
              class="ion-hide-sm-down ion-hide-md-up"
              src="/placeholders/sm.png"
              alt="generali-sito"
            />
            <ion-img
              class="ion-hide-md-down ion-hide-lg-up"
              src="/placeholders/md.png"
              alt="generali-sito"
            />
            <ion-img
              class="ion-hide-lg-down ion-hide-xl-up"
              src="/placeholders/lg.png"
              alt="generali-sito"
            />
            <ion-img
              class="ion-hide-xl-down"
              src="/placeholders/xl.png"
              alt="generali-sito"
            />
            <p>provided images: sm, md</p>

            <ion-img
              class="ion-hide-md-up"
              src="/placeholders/sm.png"
              alt="generali-sito"
            />
            <ion-img
              class="ion-hide-md-down"
              src="/placeholders/md.png"
              alt="generali-sito"
            />
          </ion-grid>
          <h2>Without fixed grid</h2>
          <p>provided images: xs, sm, md, lg, xl</p>
          <ion-img
            class="ion-hide-sm-up"
            src="/placeholders/xs.png"
            alt="generali-sito"
          />
          <ion-img
            class="ion-hide-sm-down ion-hide-md-up"
            src="/placeholders/sm.png"
            alt="generali-sito"
          />
          <ion-img
            class="ion-hide-md-down ion-hide-lg-up"
            src="/placeholders/md.png"
            alt="generali-sito"
          />
          <ion-img
            class="ion-hide-lg-down ion-hide-xl-up"
            src="/placeholders/lg.png"
            alt="generali-sito"
          />
          <ion-img
            class="ion-hide-xl-down"
            src="/placeholders/xl.png"
            alt="generali-sito"
          />
        </div>
      }
    ></DefaultPage>
  );
};

export default Resources;
export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      defaultPage: {
        headTitle: 'Images',
        headOgDescription:
          'Documentation – How to add images to this website?',
        footer: {
          featuredProjects: projectsParams.filter((pp) => pp.featured),
        },
      },
    },
    revalidate: 86400,
  };
};
