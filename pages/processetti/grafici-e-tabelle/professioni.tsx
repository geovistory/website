/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import { ImageTitle } from '../../../components/project-specific/ImageTitle.component';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { graficiTabelleLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import { Subtitle } from '../../../components/project-specific/Subtitle.component';
import styles from './grafici.module.css';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={graficiTabelleLinks}>
      <ion-grid fixed>
        <h1>Professioni</h1>
        <ImageTitle>
          Professioni dei richiedenti
          <br />
          Età all’arrivo a Venezia e età al processetto secondo la professione
          (al momento del processetto)
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={
            "Età media dei richiedenti al processetto e all'arrivo a Venezia, per le prime trenta professioni rappresentate"
          }
          imageUrls={[
            '/processetti/diagrams/11_etaProf_sl.svg',
            '/processetti/diagrams/11_etaProf_xl.svg',
          ]}
        >
          <ion-img
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
        <p>
          L'intero spettro delle professioni esercitate nel contesto urbano
          trova rappresentazione tra le occupazioni dei richiedenti, a
          dimostrazione di quanto Venezia fosse una città le cui attività erano
          aperte agli stranieri, in particolar modo sullo scorcio del XVI
          secolo, quando l'industria veneziana toccava il culmine della sua
          prosperità. Alcuni mestieri erano predominanti, data la vocazione
          portuale e marittima della città (mariner, fachin), la sua struttura
          sociale (masser) e il dinamismo di alcuni settori, primo fra tutti
          quello tessile (tesser, samiter, tentor, verghezin, laner). La
          produzione di lana e seta raggiunse l'apice alla fine del XVI secolo,
          richiedendo una grande forza lavoro alimentata dai flussi immigratori,
          il che spiega la rapida ripresa della popolazione dopo la mortifera
          peste del 1576.
        </p>
        <p>
          La considerazione formulabile a partire dall’osservazione della
          professione svolta dai richiedenti al momento del processetto rivela
          due fenomeni correlati. In primo luogo, l'età di arrivo a Venezia era
          più avanzata per le professioni qualificate, liberali e pubbliche e
          per la mercatura. Il secondo fenomeno concerne la più avanzata età al
          matrimonio di coloro che risultano giunti a Venezia in più tarda età
          proprio a causa della loro professione. I mercanti si sposavano in
          media attorno ai 31 anni, i mazeri a 29, i fanti a 28.
        </p>
        <p>
          Tra l’approdo in città e il matrimonio passavano una dozzina di anni,
          indipendentemente dalla professione svolta dal richiedente.
        </p>
        <ImageTitle>
          Età dei testimoni al processetto e all’arrivo a Venezia
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
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
        <ImageTitle>Permanenza dei testimoni a Venezia</ImageTitle>{' '}
        <Subtitle>(Periodo 1592-1604)</Subtitle>
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
        <p>
          I testimoni che prendevano parte a un processetto avevano mediamente
          una decina di anni in più rispetto allo sposo, cioè circa 38 anni.
          Tale differenza anagrafica trova ragione nella natura dei rapporti
          intercorsi tra il richiedente e i suoi testimoni, chiamati a fornire
          informazioni non solo sulla condizione contingente del richiedente, ma
          anche sul suo passato. Chiamare a testimoniare persone dello stesso
          paese o accomunati per professione spesso significa scegliere
          testimoni della stessa generazione o addirittura della stessa fascia
          d'età. Ciò nondimeno se la differenza risulta così marcata, è evidente
          che il singolo testimone veniva prescelto in virtù della credibilità
          attribuibile alla sua parola, che era d’un lato funzione del grado di
          interconoscenza, ma dall’altro risultava determinato dallo{' '}
          <i>status sociale</i>. La parola del maestro conta più di quella di un
          compagno di apprendistato.
        </p>
        <p>
          L'età in cui i testimoni stranieri raggiungevano la città risulta
          tendenzialmente più alta di quella dei richiedenti, una media di 19
          anni contro quella di 14. Questa discrepanza va messa in relazione con
          l'età più avanzata in cui alcuni professionisti qualificati
          immigravano e si stabilivano a Venezia, e tra i quali i testimoni
          potevano essere selezionati in modo preferenziale, sempre che
          soddisfacessero i criteri richiesti. Va detto che l’arrivo ritardato
          non sembra aver influito sulla durata della loro permanenza a Venezia
          che in media si attestava attorno ai 17 anni. Il tempo trascorso
          costituiva, con ogni evidenza, un consolidamento del riconoscimento
          sociale del testimone, conferendo così ulteriore credibilità alla
          deposizione.
        </p>
        <ImageTitle>
          Confronto delle professioni dei richiedenti e dei testimoni
        </ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
        <ImageWrapper
          legend={
            'Distribuzione dei richiedenti e dei testimoni entro le prime trenta professioni più rappresentate'
          }
          imageUrls={[
            '/processetti/diagrams/15_occupation_sl.svg',
            '/processetti/diagrams/15_occupation_xl.svg',
          ]}
        >
          <ion-img
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
        <ImageTitle> Professioni dei testimoni secondo il genere</ImageTitle>
        <Subtitle>(Periodo 1592-1604)</Subtitle>
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
        <p>
          Un confronto tra i profili professionali dei richiedenti e dei
          testimoni rivela differenze significative, che sembrano riconducibili
          ai criteri di selezione dei testimoni. Il servizio domestico era una
          delle occupazioni più comuni tra i nubendi, mentre risulta praticata
          da un numero limitatissimo di testimoni, probabilmente a causa della
          loro intrinseca dipendenza dal datore di lavoro, che indeboliva la
          credibilità della loro dichiarazioni. I marinai erano numerosi tra i
          richiedenti, ma anche tra i testimoni, non solo perché erano, insieme
          ai facchini, le professioni più richieste, ma anche perché erano in
          grado di fornire notizie di avvenimenti occorsi in luoghi remoti, o
          comunque extra-urbani. I marinai, ad esempio, non erano chiamati a
          testimoniare solo nei processetti volti a provare lo stato libero, ma
          anche per l’accertamento dello stato vedovile, attestando la scomparsa
          del coniuge durante la navigazione o il soggiorno in altro luogo.{' '}
        </p>
        <p>
          Quanto ai facchini e ai bacarioli, erano certamente di condizione
          sociale modesta, il che discorda con l'idea che il testimone dovessero
          godere di un certo grado di riconoscimento sociale; ciò nonostante
          avevano il vantaggio di godere di ampie e ramificate reti di
          conoscenza derivate dai loro continui spostamenti entro il tessuto
          urbano. Dovevano quindi essere molto apprezzati in qualità di
          testimoni in virtù della conoscenza diretta e indiretta che potevano
          avere dei richiedenti.
        </p>
        <p>
          La forte presenza di testimoni attivi e operanti nel settore tessile è
          spiegabile sulla base di due distinte circostanze tra loro
          interdipendenti. D’un lato che i testimoni venivano non di rado
          individuati tra sodali che condividevano l’ambito professionale e,
          spesso, anche l’origine; dall’altro che non di rado sussisteva un
          vincolo di subalternità tra richiedente e deponente, come nel caso dei
          maestri che impiegavano apprendisti e lavoranti.
        </p>
        <p>
          Viceversa la sovrarappresentazione di mercanti e fanti tra i testimoni
          sembra derivare, come si è detto, dal riconoscimento del loro status
          sociale presso la curia patriarcale.{' '}
        </p>
        <p>
          Le pochissime donne chiamate a testimoniare, nella maggior parte dei
          casi per conto di altre donne, erano principalmente occupate come
          domestiche.
        </p>
      </ion-grid>
    </ProcessettiGraficiLayout>
  );
};

export default P;
export const getStaticProps: GetStaticProps<GraficiTabelleProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: 'Grafici e tabelle > Professioni',
        headTitle: 'Grafici e tabelle > Professioni',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
