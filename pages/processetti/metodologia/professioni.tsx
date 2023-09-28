/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next';
import { GraficiTabelleProps } from '../../../components/project-specific/GraficiTabelleProps';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { metodologiaLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';
import Image from 'next/image';
import img1 from '../../../public/processetti/metodologia/text_annotation.png';

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>Professioni</h1>

        <p>
          Le <i>Occupation</i> nell’ambito del progetto, tendono a coincidere
          con le professioni, intese in un’accezione lata che non le distingue
          propriamente dai mestieri (attività di carattere prettamente manuale).
        </p>
        <p>
          Ponendosi entro il quadro ontologico come specifici tipi pertinenti al
          dominio più generale delle attività umane, le professioni sono
          modellate come sottoclassi di <i>Type</i>. Tale circostanza le rende
          soggette alla possibile tassonomizzazione dei termini, in cui il
          posizionamento gerarchico delle singole entità occupazionali è
          specificato dalle proprietà di subordinazione o sovraordinazione.
        </p>
        <p>
          La creazione di una tassonomia delle professioni fa sì che
          un’indicazione occupazionale <i>‘generica’</i> si trovi a raccogliere
          tutte le sue specializzazioni, seguendo il più fedelmente possibile
          l’orizzonte culturale della fonte.
        </p>

        <h4>Mercante</h4>
        <pre>
          . . NT1 Mercante da panni
          <br />. . . . NT2 Mercante da panni de seda
          <br />. . . . NT2 Mercante da panni de lana
        </pre>

        <p>
          Poiché in questo tipo di sistematica, tutti i termini per essere
          generalizzati devono obbligatoriamente afferire alla classe{' '}
          <i>Occupation</i>, per affinare ulteriormente la classificazione si è
          reputato utile ricondurre le singole professioni a uno o più domini di
          attività (Activity Domain), intesi come{' '}
          <i>“a collection of occupations or other kinds of activities”</i>.{' '}
        </p>
        <p>
          Vale a dire che sul piano logico queste ultime rientrano tra le{' '}
          <i>Intentional Collection</i>: una classe dell'ontologia CIDOC CRM{' '}
          <i>Top-Level Extension for Humanities and Social sciences</i> (SDHSS)
          volta a raccogliere, giusta la definizione che l’accompagna,
          collezioni “di entità come concepite o immaginate da una persona,
          senza una necessaria corrispondenza nella realtà fisica o fattuale”
          (“of entities as conceived or imagined by a person, with no necessary
          correspondence in physical or factual reality”).
        </p>
        <p>
          Sono state perciò integrate nel modello semantico del project tanto la
          classe <i>Activity Domain</i>, quanto una sua specifica proprietà
          (denominata <i>belongs to activity domain (classifies occupation)</i>)
          in grado di associare ogni singola professione al tipo di attività che
          la classifica.
        </p>

        <h4>Commercio (Act. Dom.) </h4>
        <pre>. . NT1 Commercio di tessuti e filati (Act. Dom.) </pre>

        <h4>Mercante da panni (Occ.) </h4>
        <pre>
          . . . .NT1 Mercante da panni de lana (Occ.)
          <br />. . . .NT1 Mercante da panni de seda (Occ.){' '}
        </pre>

        <h4>Tessile (Act. Dom.) </h4>
        <pre>. . NT1 Commercio di tessuti e filati (Act. Dom.) </pre>

        <h4>Mercante da panni (Occ.) </h4>
        <pre>
          . . . .NT1 Mercante da panni de lana (Occ.)
          <br />. . . .NT1 Mercante da panni de seda (Occ.)
        </pre>

        <p>
          Va tenuto conto che quest’ultima proprietà, potendo essere
          moltiplicata tante volte quanto necessario, offre implicitamente la
          possibilità di istituire relazioni poligerarchiche, associando un
          singolo termine a più di una categoria simultaneamente
          (ramificazione). A conferire ulteriore profondità all’alberatura,
          sovviene poi la possibilità di introdurre una tassonomia dei domini di
          attività, definendo nuovamente relazioni generiche o partitive.
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
        headOgDescription: 'Metodologia > Professioni',
        headTitle: 'Metodologia > Professioni',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
