import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';
import { ProjectFooter } from '../../../components/layouts/ProjectFooter.component';
import { ProcessettiBanner } from '../../../components/project-specific/ProcessettiBanner.component';
import { ProcessettiNavbar } from '../../../components/project-specific/ProcessettiNavbar.component';
import theming from '../index.module.css';
import styles from './grafici.module.css';

interface GraficiTabelleProps {}
const GraficiTabelle: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <>
      <Head>
        <title>Grafici e tabelle</title>
      </Head>
      <ion-app class={theming.theme}>
        <ion-content class={styles.content}>
          <ion-grid fixed>
            <h2>01</h2>
            <ImageWrapper
              legend={'Distribuzione dei processetti trattati'}
              imageUrls={[
                '/processetti/diagrams/01_numeroProcessetti_sl.svg',
                '/processetti/diagrams/01_numeroProcessetti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory"
                src="/processetti/diagrams/01_numeroProcessetti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory"
                src="/processetti/diagrams/01_numeroProcessetti_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>02</h2>
            <ImageWrapper
              legend={'Distribuzione dei processetti secondo il tipo'}
              imageUrls={[
                '/processetti/diagrams/02_distribuzioneTipooProcessetti_sl.svg',
                '/processetti/diagrams/02_distribuzioneTipooProcessetti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory distinti per tipo"
                src="/processetti/diagrams/02_distribuzioneTipooProcessetti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con il numero di processetti matrimoniali annotati in Geovistory distinti per tipo"
                src="/processetti/diagrams/02_distribuzioneTipooProcessetti_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>03</h2>
            <ImageWrapper
              legend={'Quantificazione per classe delle istanze prodotte'}
              imageUrls={[
                '/processetti/diagrams/03_classDistribution_sl.svg',
                '/processetti/diagrams/03_classDistribution_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la quantificazione per classe delle istanze prodotte in Geovistory"
                src="/processetti/diagrams/03_classDistribution_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la quantificazione per classe delle istanze prodotte in Geovistory"
                src="/processetti/diagrams/03_classDistribution_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>04</h2>
            <ImageWrapper
              legend={'Durata dei processetti'}
              imageUrls={[
                '/processetti/diagrams/04_durataProcessetto_sl.svg',
                '/processetti/diagrams/04_durataProcessetto_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la durata dei processetto distinti per tipo"
                src="/processetti/diagrams/04_durataProcessetto_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la durata dei processetto distinti per tipo"
                src="/processetti/diagrams/04_durataProcessetto_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>05</h2>
            <ImageWrapper
              legend={'Statuto dei soggetti e distribuzione di genere'}
              imageUrls={['05_statudoPerson_sl.svg', '05_statudoPerson_xl.svg']}
            >/processetti/diagrams/
             /processetti/diagrams/ <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la distribuzione dei soggetti per ruolo e distribuzione di genere"
                src="/processetti/diagrams/05_statudoPerson_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la distribuzione dei soggetti per ruolo e distribuzione di genere"
                src="/processetti/diagrams/05_statudoPerson_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>06</h2>
            <ImageWrapper
              legend={
                'Distribuzione dei richiedenti, distinti per genere e tipo di processetto'
              }
              imageUrls={[
                '/processetti/diagrams/06_distribuzioneGenereRichiedenti_sl.svg',
                '/processetti/diagrams/06_distribuzioneGenereRichiedenti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la distribuzione di genere dei richiedenti, distinti per tipo di processetto"
                src="/processetti/diagrams/06_distribuzioneGenereRichiedenti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la distribuzione di genere dei richiedenti, distinti per tipo di processetto"
                src="/processetti/diagrams/06_distribuzioneGenereRichiedenti_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>07</h2>
            <ImageWrapper
              legend={'Età dei richiedenti al momento del processetto'}
              imageUrls={[
                '/processetti/diagrams/07_etàProcessettoRichiedenti_sl.svg',
                '/processetti/diagrams/07_etàProcessettoRichiedenti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con l'età dei richiedenti al momento del processetto, distinti per genere"
                src="/processetti/diagrams/07_etàProcessettoRichiedenti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con l'età dei richiedenti al momento del processetto, distinti per genere"
                src="/processetti/diagrams/07_etàProcessettoRichiedenti_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>08</h2>
            <ImageWrapper
              legend={
                'Età dei richiedenti al momento del loro arrivo a Venezia'
              }
              imageUrls={[
                '/processetti/diagrams/08_etàArrivoRichiedenti_sl.svg',
                '/processetti/diagrams/08_etàArrivoRichiedenti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con l'età dei richiedenti al momento del loro arrivo a Venezia, distinti per genere"
                src="/processetti/diagrams/08_etàArrivoRichiedenti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con l'età dei richiedenti al momento del loro arrivo a Venezia, distinti per genere"
                src="/processetti/diagrams/08_etàArrivoRichiedenti_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>09</h2>
            <ImageWrapper
              legend={
                "Distribuzione dei richiedenti per età al momento del processetto e dell'arrivo a Venezia"
              }
              imageUrls={[
                '/processetti/diagrams/09_arrivoProcessettoRichiedenti_sl.svg',
                '/processetti/diagrams/09_arrivoProcessettoRichiedenti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la distribuzione dei richiedenti per età al momento del processetto e dell'arrivo a Venezia"
                src="/processetti/diagrams/09_arrivoProcessettoRichiedenti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la distribuzione dei richiedenti per età al momento del processetto e dell'arrivo a Venezia"
                src="/processetti/diagrams/09_arrivoProcessettoRichiedenti_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>10</h2>
            <ImageWrapper
              legend={
                'Tempo di permanenza dei richiedenti a Venezia, prima del processetto'
              }
              imageUrls={[
                '/processetti/diagrams/10_permanenzaRichiedenti_sl.svg',
                '/processetti/diagrams/10_permanenzaRichiedenti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con il tempo di permanenza dei richiedenti a Venezia, prima del processetto, distinti per genere"
                src="/processetti/diagrams/10_permanenzaRichiedenti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con il tempo di permanenza dei richiedenti a Venezia, prima del processetto, distinti per genere"
                src="/processetti/diagrams/10_permanenzaRichiedenti_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>11</h2>
            <ImageWrapper
              legend={
                "Età media dei richiedenti al processetto e all'arrivo a Venezia, per le prime trenta professioni rappresentate"
              }
              imageUrls={['11_etaProf_sl.svg', '11_etaProf_xl.svg']}
            >/processetti/diagrams/
             /processetti/diagrams/ <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con l'età media dei richiedenti al processetto e all'arrivo a Venezia, per le prime trenta professioni rappresentate"
                src="/processetti/diagrams/11_etaProf_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con l'età media dei richiedenti al processetto e all'arrivo a Venezia, per le prime trenta professioni rappresentate"
                src="/processetti/diagrams/11_etaProf_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>12</h2>
            <ImageWrapper
              legend={'Età dei testimoni al momento del processetto'}
              imageUrls={[
                '/processetti/diagrams/12_testimoniEtaProcessetto_sl.svg',
                '/processetti/diagrams/12_testimoniEtaProcessetto_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con l'età dei testimoni al momento del processetto, distinti per genere"
                src="/processetti/diagrams/12_testimoniEtaProcessetto_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con l'età dei testimoni al momento del processetto, distinti per genere"
                src="/processetti/diagrams/12_testimoniEtaProcessetto_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>13</h2>
            <ImageWrapper
              legend={'Età dei testimoni al momento del loro arrivo a Venezia'}
              imageUrls={[
                '/processetti/diagrams/13_testimoniArrivoVenezia_sl.svg',
                '/processetti/diagrams/13_testimoniArrivoVenezia_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con l'età dei testimoni al momento del loro arrivo a Venezia, distinti per genere"
                src="/processetti/diagrams/13_testimoniArrivoVenezia_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con l'età dei testimoni al momento del loro arrivo a Venezia, distinti per genere"
                src="/processetti/diagrams/13_testimoniArrivoVenezia_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>14</h2>
            <ImageWrapper
              legend={
                'Tempo di permanenza dei testimoni a Venezia, prima del processetto'
              }
              imageUrls={[
                '/processetti/diagrams/14_testimoniPermanenza_sl.svg',
                '/processetti/diagrams/14_testimoniPermanenza_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con il tempo di permanenza dei testimoni a Venezia, prima del processetto, distinti per genere"
                src="/processetti/diagrams/14_testimoniPermanenza_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con il tempo di permanenza dei testimoni a Venezia, prima del processetto, distinti per genere"
                src="/processetti/diagrams/14_testimoniPermanenza_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>15</h2>
            <ImageWrapper
              legend={
                'Distribuzione dei richiedenti e dei testimoni entro le prime trenta professioni più rappresentate'
              }
              imageUrls={['15_occupation_sl.svg', '15_occupation_xl.svg']}
            >/processetti/diagrams/
             /processetti/diagrams/ <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la distribuzione dei richiedenti e dei testimoni entro le prime trenta professioni più rappresentate"
                src="/processetti/diagrams/15_occupation_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la distribuzione dei richiedenti e dei testimoni entro le prime trenta professioni più rappresentate"
                src="/processetti/diagrams/15_occupation_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>16</h2>
            <ImageWrapper
              legend={
                'Distribuzione professionale tra i testimoni, distinto per genere'
              }
              imageUrls={[
                '/processetti/diagrams/16_professioneGenere_sl.svg',
                '/processetti/diagrams/16_professioneGenere_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la distribuzione professionale tra i testimoni, distinto per genere"
                src="/processetti/diagrams/16_professioneGenere_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la distribuzione professionale tra i testimoni, distinto per genere"
                src="/processetti/diagrams/16_professioneGenere_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>17</h2>
            <ImageWrapper
              legend={
                'Frequenza dei tipi di interazione sociale tra richiedenti e i loro testimoni'
              }
              imageUrls={[
                '/processetti/diagrams/17_tipoRelazioni_sl.svg.svg',
                '/processetti/diagrams/17_tipoRelazioni_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la frequenza dei tipi di interazione sociale tra richiedenti e i loro testimoni"
                src="/processetti/diagrams/17_tipoRelazioni_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la frequenza dei tipi di interazione sociale tra richiedenti e i loro testimoni"
                src="/processetti/diagrams/17_tipoRelazioni_sl.svg.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>18</h2>
            <ImageWrapper
              legend={
                'Durata delle relazioni sociali intercorse tra i richiedenti e i loro testimoni'
              }
              imageUrls={[
                '/processetti/diagrams/18_durataRelazioni_sl.svg',
                '/processetti/diagrams/18_durataRelazioni_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la durata delle relazioni sociali intercorse tra i richiedenti e i loro testimoni"
                src="/processetti/diagrams/18_durataRelazioni_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la durata delle relazioni sociali intercorse tra i richiedenti e i loro testimoni"
                src="/processetti/diagrams/18_durataRelazioni_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>19</h2>
            <ImageWrapper
              legend={'Origine geografiche dei richiedenti e dei testimoni'}
              imageUrls={[
                '/processetti/diagrams/19_origineGeografica_sl.svg',
                '/processetti/diagrams/19_origineGeografica_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Visualizzazione su mappa dell'origine geografica dei richiedenti e dei testimoni"
                src="/processetti/diagrams/19_origineGeografica_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Visualizzazione su mappa dell'origine geografica dei richiedenti e dei testimoni"
                src="/processetti/diagrams/19_origineGeografica_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>20</h2>
            <ImageWrapper
              legend={
                "Distribuzione percentuale dei richiedenti e dei testimoni per luogo d'origine"
              }
              imageUrls={[
                '/processetti/diagrams/20_origineGeograficaTab_sl.svg',
                '/processetti/diagrams/20_origineGeograficaTab_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la distribuzione percentuale dei richiedenti e dei testimoni per luogo d'origine"
                src="/processetti/diagrams/20_origineGeograficaTab_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la distribuzione percentuale dei richiedenti e dei testimoni per luogo d'origine"
                src="/processetti/diagrams/20_origineGeograficaTab_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>21</h2>
            <ImageWrapper
              legend={
                'Età media dei richiedenti all’arrivo a Venezia e al processetto secondo l’origine e prime trenta origine geografica dei richiedenti secondo il genere'
              }
              imageUrls={[
                '/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_sl.svg',
                '/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con l'età media dei richiedenti all’arrivo a Venezia e al processetto secondo l’origine e prime trenta origine geografica dei richiedenti secondo il genere"
                src="/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con l'età media dei richiedenti all’arrivo a Venezia e al processetto secondo l’origine e prime trenta origine geografica dei richiedenti secondo il genere"
                src="/processetti/diagrams/21_etaMediaOrigineRichiedentigenere_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>22</h2>
            <ImageWrapper
              legend={
                'Distribuzione per parrocchia dei luoghi di abitazione e lavoro dei richiedenti'
              }
              imageUrls={[
                '/processetti/diagrams/22_abitazioneLavoroRichiedenti_sl.svg',
                '/processetti/diagrams/22_abitazioneLavoroRichiedenti_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Mappa rappresentante la distribuzione per parrocchia dei luoghi di abitazione e lavoro dei richiedenti"
                src="/processetti/diagrams/22_abitazioneLavoroRichiedenti_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Mappa rappresentante la distribuzione per parrocchia dei luoghi di abitazione e lavoro dei richiedenti"
                src="/processetti/diagrams/22_abitazioneLavoroRichiedenti_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>23</h2>
            <ImageWrapper
              legend={
                "Confronto tra le parrocchie d'abitazione dei richiedenti e dei testimoni"
              }
              imageUrls={[
                '/processetti/diagrams/23_abitazioneRichiedentiTestimoni_sl.svg',
                '/processetti/diagrams/23_abitazioneRichiedentiTestimoni_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Mappe con il confronto tra le parrocchie d'abitazione dei richiedenti e dei testimoni"
                src="/processetti/diagrams/23_abitazioneRichiedentiTestimoni_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Mappe con il confronto tra le parrocchie d'abitazione dei richiedenti e dei testimoni"
                src="/processetti/diagrams/23_abitazioneRichiedentiTestimoni_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>24</h2>
            <ImageWrapper
              legend={
                "Frequenza d'uso dei concetti per la descrizione degli spostamenti extraurbani"
              }
              imageUrls={[
                '/processetti/diagrams/24_concettiAccount_sl.svg',
                '/processetti/diagrams/24_concettiAccount_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Grafico con la frequenza d'uso dei concetti per la descrizione degli spostamenti extra-urbani"
                src="/processetti/diagrams/24_concettiAccount_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Grafico con la frequenza d'uso dei concetti per la descrizione degli spostamenti extra-urbani"
                src="/processetti/diagrams/24_concettiAccount_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>25</h2>
            <ImageWrapper
              legend={
                'Rapporto tra la frequenza degli spostamenti extraurbani e il tempo di stabile permanenza a Venezia'
              }
              imageUrls={[
                '/processetti/diagrams/25_frequenzaMobilitàPermanenza_sl.svg',
                '/processetti/diagrams/25_frequenzaMobilitàPermanenza_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Tabella che pone in rapporto tra la frequenza degli spostamenti extraurbani e il tempo di stabile permanenza a Venezia"
                src="/processetti/diagrams/25_frequenzaMobilitàPermanenza_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Tabella che pone in rapporto tra la frequenza degli spostamenti extraurbani e il tempo di stabile permanenza a Venezia"
                src="/processetti/diagrams/25_frequenzaMobilitàPermanenza_sl.svg"
              ></ion-img>
            </ImageWrapper>
            <h2>26</h2>
            <ImageWrapper
              legend={
                "Origini dei richiedenti con almeno un ritorno temporaneo al paese d'origine"
              }
              imageUrls={[
                '/processetti/diagrams/26_originiRitorno_sl.svg',
                '/processetti/diagrams/26_originiRitorno_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Mappa con le origini dei richiedenti aventi almeno un ritorno temporaneo al paese d'origine"
                src="/processetti/diagrams/26_originiRitorno_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Mappa con le origini dei richiedenti aventi almeno un ritorno temporaneo al paese d'origine"
                src="/processetti/diagrams/26_originiRitorno_sl.svg"
              ></ion-img>
            </ImageWrapper>

            <h2>27</h2>
            <ImageWrapper
              legend={'Origine dei richiedenti nel retroterra veneto'}
              imageUrls={[
                '/processetti/diagrams/27_originientroterraVeneto_sl.svg',
                '/processetti/diagrams/27_originientroterraVeneto_xl.svg',
              ]}
            >
              <ion-img
                class={`ion-hide-lg-down ${styles.border}`}
                alt="Mappa con le origini dei richiedenti"
                src="/processetti/diagrams/27_originientroterraVeneto_xl.svg"
              ></ion-img>
              <ion-img
                class={`ion-hide-lg-up ${styles.border}`}
                alt="Mappa con le origini dei richiedenti"
                src="/processetti/diagrams/27_originientroterraVeneto_sl.svg"
              ></ion-img>
            </ImageWrapper>
          </ion-grid>
          <ProjectFooter showEeditiones={false}></ProjectFooter>
        </ion-content>
      </ion-app>
    </>
  );
};

export default GraficiTabelle;
export const getStaticProps: GetStaticProps<GraficiTabelleProps> = async () => {
  return { props: {} };
};
