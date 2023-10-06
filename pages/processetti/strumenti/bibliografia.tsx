import type { GetStaticProps, NextPage } from 'next';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import { strumentiLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';

export interface BibliografiaProps {
  head: HeadProps;
}
const Bibliografia: NextPage<BibliografiaProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={strumentiLinks}>
      <ion-grid>
        <h1>Bibliografia</h1>
        <p>
          Albani Benedetta (2003-2004), <i>Matrimoni e società a Roma nel primo
          Seicento attraverso i processetti matrimoniali</i>, tesi di laurea, dir.
          M. A. Visceglia, La Sapienza Università di Roma.
        </p>
        <p>
          Avorio Tiziana, Chianese Stefano, Guarino Nicola (2003), &quote;Una città
          senza immigranti? Caratteri della mobilità a Napoli tra Settecento e
          Ottocento&quote;, in A. Arru e F. Ramella (a cura di), <i>L'Italia delle
          migrazioni interne. Donne, uomini, mobilità in età moderna e
          contemporanea</i>, Roma, pp. 111-30.
        </p>
        <p>
          Belfanti Carlo Marco (1990), &quote;Immigrazione e mestieri: i trentini a
          Mantova (secoli XVII e XVIII)&quote;, in &quote;Bollettino di demografia storica&quote;, 12,
          pp. 102-15.
        </p>

        <p>
          Belfanti Carlo Marco (1994), <i>Mestieri e forestieri. Immigrazione ed
          economia urbana a Mantova fra Sei e Settecento</i>, Milano.
        </p>

        <p>
          Canepari Eleonora (2003), &quote;Mestiere e spazio urbano nella costruzione
          dei legami sociali degli immigrati a Roma in età moderna&quote;, in A. Arru
          e F. Ramella (a cura di), <i>L'Italia delle migrazioni interne. Donne,
          uomini, mobilità in età moderna e contemporanea</i>, Roma, pp. 33-76.
        </p>

        <p>
          Canepari Eleonora (2008), &quote;Mobilità, sociabilità e appartenenze nella
          Roma moderna&quote;, in A. Arru, D.L. Cagliati e F. Ramella (a cura di),
          <i>Donne e uomini migranti. Storie e geografie tra breve e lunga
          distanza</i>, Roma, pp. 301-22.
        </p>

        <p>
          Chauvard Jean-François (2018), &quote;Le mariage entre Grecs et Latins dans
          le monde vénitien. Gouvernement des minorités, discordes
          confessionnelles et convergences procédurales (Fin XVIe - fin XVIIIe
          siècle)&quote;, in &quote;Annales de démographie historique&quote;, 2018/2, p. 179-211.
        </p>

        <p>
          Corazzol Gigi (2000), &quote;A “scola da piccolo”. Testimonianze di
          lavoratori immigrati a Venezia (1592-1613)&quote;, in L. Antonielli, C.
          Capra, M. Infelise (a cura di), <i>Per Marino Berengo: studi degli
          allievi</i>, Milano.
        </p>

        <p>
          Delille Gérard (1976), &quote;Classi sociali e scambi matrimoniali nel
          Salernitano&quote;, in &quote;Quaderni Storici&quote;, 33, p. 997.
        </p>

        <p>
          Menzione, Andrea (1990), &quote;Immigrazioni a Livorno nel secolo XVII
          attraverso i processi matrimoniali. Alcune note&quote;, in &quote;Bollettino di
          demografia storica&quote;, 12, pp. 97-102.
        </p>

        <p>
          Petraccone Claudia (1972), &quote;Registri di nascite e matrimoni a Napoli&quote;,
          in C.I.S.P., in <i>Le fonti della demografia storica in Italia</i>, vol. I,
          parte II, Roma, pp. 647-99.
        </p>

        <p>
          Zannini Andrea (1998), &quote;L'altra Bergamo in laguna: la comunità
          bergamasca a Venezia&quote;, in <i>Storia economica e sociale di Bergamo. Il
          tempo della Serenissima. Il lungo Cinquecento</i>, Bergamo, pp. 175-93.
        </p>
      </ion-grid>
    </ProcessettiGraficiLayout>
  );
};

export default Bibliografia;
export const getStaticProps: GetStaticProps<BibliografiaProps> = async () => {
  return { props: {
    head: {
      headOgDescription: 'Progetto ANR Processetti',
      headTitle: 'Bibliografia – Processetti',
      headOgImage: '/socialimage/processetti.jpg',
    },
  } };
};
