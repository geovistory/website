import type { GetStaticProps, NextPage } from 'next';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import { strumentiLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import mainStyles from '../index.module.css'
export interface BibliografiaProps {
  head: HeadProps;
}
const Bibliografia: NextPage<BibliografiaProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={strumentiLinks}>
      <ion-grid>
        <h1>Bibliografia</h1>
        <p className={mainStyles.indent1}>
          Albani Benedetta (2003-2004), <i>Matrimoni e società a Roma nel primo
          Seicento attraverso i processetti matrimoniali</i>, tesi di laurea, dir.
          M. A. Visceglia, La Sapienza Università di Roma.
        </p>
        <p className={mainStyles.indent1}>
          Avorio Tiziana, Chianese Stefano, Guarino Nicola (2003), &quot;Una città
          senza immigranti? Caratteri della mobilità a Napoli tra Settecento e
          Ottocento&quot;, in A. Arru e F. Ramella (a cura di), <i>L&apos;Italia delle
          contemporanea</i>, Roma, pp. 111-30.
        </p>
        <p className={mainStyles.indent1}>
          Belfanti Carlo Marco (1990), &quot;Immigrazione e mestieri: i trentini a
          Mantova (secoli XVII e XVIII)&quot;, in &quot;Bollettino di demografia storica&quot;, 12,
          pp. 102-15.
        </p>

        <p className={mainStyles.indent1}>
          Belfanti Carlo Marco (1994), <i>Mestieri e forestieri. Immigrazione ed
          economia urbana a Mantova fra Sei e Settecento</i>, Milano.
        </p>

        <p className={mainStyles.indent1}>
          Canepari Eleonora (2003), &quot;Mestiere e spazio urbano nella costruzione
          dei legami sociali degli immigrati a Roma in età moderna&quot;, in A. Arru
          e F. Ramella (a cura di), <i>L&apos;Italia delle migrazioni interne. Donne,
          uomini, mobilità in età moderna e contemporanea</i>, Roma, pp. 33-76.
        </p>

        <p className={mainStyles.indent1}>
          Canepari Eleonora (2008), &quot;Mobilità, sociabilità e appartenenze nella
          Roma moderna&quot;, in A. Arru, D.L. Cagliati e F. Ramella (a cura di),
          <i>Donne e uomini migranti. Storie e geografie tra breve e lunga
          distanza</i>, Roma, pp. 301-22.
        </p>

        <p className={mainStyles.indent1}>
          Chauvard Jean-François (2018), &quot;Le mariage entre Grecs et Latins dans
          le monde vénitien. Gouvernement des minorités, discordes
          confessionnelles et convergences procédurales (Fin XVIe - fin XVIIIe
          siècle)&quot;, in &quot;Annales de démographie historique&quot;, 2018/2, p. 179-211.
        </p>

        <p className={mainStyles.indent1}>
          Corazzol Gigi (2000), &quot;A “scola da piccolo”. Testimonianze di
          lavoratori immigrati a Venezia (1592-1613)&quot;, in L. Antonielli, C.
          Capra, M. Infelise (a cura di), <i>Per Marino Berengo: studi degli
          allievi</i>, Milano.
        </p>

        <p className={mainStyles.indent1}>
          Delille Gérard (1976), &quot;Classi sociali e scambi matrimoniali nel
          Salernitano&quot;, in &quot;Quaderni Storici&quot;, 33, p. 997.
        </p>

        <p className={mainStyles.indent1}>
          Menzione, Andrea (1990), &quot;Immigrazioni a Livorno nel secolo XVII
          attraverso i processi matrimoniali. Alcune note&quot;, in &quot;Bollettino di
          demografia storica&quot;, 12, pp. 97-102.
        </p>

        <p className={mainStyles.indent1}>
          Petraccone Claudia (1972), &quot;Registri di nascite e matrimoni a Napoli&quot;,
          in C.I.S.P., in <i>Le fonti della demografia storica in Italia</i>, vol. I,
          parte II, Roma, pp. 647-99.
        </p>

        <p className={mainStyles.indent1}>
          Zannini Andrea (1998), &quot;L&apos;altra Bergamo in laguna: la comunità
          bergamasca a Venezia&quot;, in Storia economica e sociale di Bergamo. Il
          tempo della Serenissima. Il lungo Cinquecento, Bergamo, Fondazione per
          la storia economica e sociale di Bergamo, pp. 175-93.
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
