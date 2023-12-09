import type { GetStaticProps, NextPage } from "next";
import { HeadProps } from "../../../components/layouts/DefaultHead";
import { strumentiLinks } from "../../../components/project-specific/ProcessettiNavbar.component";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import mainStyles from '../index.module.css'

export interface BibliografiaProps {
  head: HeadProps;
}
const Bibliografia: NextPage<BibliografiaProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={strumentiLinks}>
      <ion-grid>
      <!-- Latest version -->
      <!-- A Pico, fulgida lucciola della mia vita -->

      <h1>Bibliografia</h1>
        <p className={mainStyles.indent1}>
          Albani Benedetta (2003-2004),{" "}
          <i>
            Matrimoni e società a Roma nel primo Seicento attraverso i
            processetti matrimoniali
          </i>
          , tesi di laurea, dir. M. A. Visceglia, La Sapienza Università di Roma
        </p>
        <p className={mainStyles.indent1}>
          Avorio Tiziana, Chianese Stefano, Guarino Nicola (2003), &quot;Una
          città senza immigranti? Caratteri della mobilità a Napoli tra
          Settecento e Ottocento&quot;, in A. Arru e F. Ramella (a cura di),{" "}
          <i>L&apos;Italia delle contemporanea</i>, Roma, pp. 111-30
        </p>
        <p className={mainStyles.indent1}>
          Belfanti Carlo Marco (1990), &quot;Immigrazione e mestieri: i trentini
          a Mantova (secoli XVII e XVIII)&quot;,{" "}
          <i>Bollettino di demografia storica</i>, 12, pp. 102-15
        </p>
        <p className={mainStyles.indent1}>
          Belfanti Carlo Marco (1994),{" "}
          <i>
            Mestieri e forestieri. Immigrazione ed economia urbana a Mantova fra
            Sei e Settecento
          </i>
          , Milano
        </p>
        <p className={mainStyles.indent1}>
          Bernardi Teresa (2022), &quot;Control of Marriage and (Im)mobility in
          Venice (16th-17th Centuries) in Dialogue with Cultures of
          Vigilance&quot;, <i>Società e Storia</i>, 177, p. 546-568
        </p>
        <p className={mainStyles.indent1}>
          Bernardi Teresa (2022), &quot;Il welfare itinerante. Le doti delle
          donne greco-ortodosse in viaggio attraverso l&apos;Adriatico (XVII e
          XVIII secolo)&quot;, <i>Ateneo Veneto</i>, 21/2, p. 173-211
        </p>
        <p className={mainStyles.indent1}>
          Bernardi Teresa (2022), &quot;Tracing Migrations Within Urban Spaces:
          Women&apos;s Mobility and Identification Practices in Early Modern
          Venice&quot;, in Beatrice Zucca Micheletto (a cura di),{" "}
          <i>
            Gender and Migration in Historical Perspective: Institutions, Labour
            and Social Networks (16th to 20th Centuries){" "}
          </i>
          , Londra, p. 39-81
        </p>
        <p className={mainStyles.indent1}>
          Canepari Eleonora (2003), &quot;Mestiere e spazio urbano nella
          costruzione dei legami sociali degli immigrati a Roma in età
          moderna&quot;, in A. Arru e F. Ramella (a cura di),{" "}
          <i>
            L&apos;Italia delle migrazioni interne. Donne, uomini, mobilità in
            età moderna e contemporanea
          </i>
          , Roma, pp. 33-76
        </p>
        <p className={mainStyles.indent1}>
          Canepari Eleonora (2008), &quot;Mobilità, sociabilità e appartenenze
          nella Roma moderna&quot;, in A. Arru, D.L. Cagliati e F. Ramella (a
          cura di),{" "}
          <i>
            Donne e uomini migranti. Storie e geografie tra breve e lunga
            distanza
          </i>
          , Roma, pp. 301-22
        </p>
        <p className={mainStyles.indent1}>
          Chauvard Jean-François (2018), &quot;Le mariage entre Grecs et Latins
          dans le monde vénitien. Gouvernement des minorités, discordes
          confessionnelles et convergences procédurales (Fin XVIe - fin XVIIIe
          siècle)&quot;, <i>Annales de démographie historique</i>, 2018/2, p.
          179-211
        </p>
        <p className={mainStyles.indent1}>
          Chauvard Jean-François (2020), &quot;Il processetti matrimoniali : una
          fonte per la storia. Disciplinare il matrimonio, controllare la
          mobilità, XVI-XVIII secoli&quot;, in M. Meriggi et A. M. Rao (a cura
          di),{" "}
          <i>
            Stranieri. Controllo, accoglienza e integrazione negli Stati
            italiani (XVI-XIX secolo){" "}
          </i>
          , Naples, p. 27-48
        </p>
        <p className={mainStyles.indent1}>
          Corazzol Gigi (2000), &quot;A <i>scola da piccolo</i>. Testimonianze
          di lavoratori immigrati a Venezia (1592-1613)&quot;, in L. Antonielli,
          C. Capra, M. Infelise (a cura di),{" "}
          <i>Per Marino Berengo: studi degli allievi</i>, Milano
        </p>
        <p className={mainStyles.indent1}>
          Delille Gérard (1976), &quot;Classi sociali e scambi matrimoniali nel
          Salernitano&quot;, <i>Quaderni Storici</i>, 33, p. 953-982
        </p>
        <p className={mainStyles.indent1}>
          Menzione, Andrea (1990), &quot;Immigrazioni a Livorno nel secolo XVII
          attraverso i processi matrimoniali. Alcune note&quot;,{" "}
          <i>Bollettino di demografia storica</i>, 12, pp. 97-102
        </p>
        <p className={mainStyles.indent1}>
          Petraccone Claudia (1972), &quot;Registri di nascite e matrimoni a
          Napoli&quot;, in C.I.S.P., in{" "}
          <i>Le fonti della demografia storica in Italia</i>, vol. I, parte II,
          Roma, pp. 647-99
        </p>
        <p className={mainStyles.indent1}>
          Zannini Andrea (1998), &quot;L&apos;altra Bergamo in laguna: la
          comunità bergamasca a Venezia&quot;, in{" "}
          <i>
            Storia economica e sociale di Bergamo. Il tempo della Serenissima.
            Il lungo Cinquecento
          </i>
          , Bergamo, Fondazione per la storia economica e sociale di Bergamo,
          pp. 175-93
        </p>
        <h1>Matrimonio tridentino e matrimoni misti (tra Greci e Latini)</h1>
        <p className={mainStyles.indent1}>
          &quot;Administrer les sacrements en Europe et au Nouveau Monde&quot;,
          P. Broggio, Ch. de Castelnau-L&apos;Estoile e G. Pizzorusso (a cura
          di), <i>MEFRIM</i>, 121, 2009
        </p>
        <p className={mainStyles.indent1}>
          &quot;Investigazione previa al matrimonio&quot;, in{" "}
          <i>Enciclopedia Cattolica</i>, VII, Città del Vaticano, 1951, pp.
          132-3
        </p>
        <p className={mainStyles.indent1}>
          &quot;Stato libero&quot;, in <i>Enciclopedia Cattolica</i>, XI, Città
          del Vaticano, 1953, pp. 1271-2
        </p>
        <p className={mainStyles.indent1}>
          Bernhard Jean (1980), &quot;Le décret Tametsi du concile de Trente;
          triomphe du consensualisme matrimonial ou institution de la forme
          solennelle du mariage? &quot;,{" "}
          <i>Revue de droit canonique, XXX, Études offerts a J. Gaudemet</i>,
          pp. 209-34
        </p>
        <p className={mainStyles.indent1}>
          Cristellon Cecilia (2011), &quot;Missionaria o in pericolo di
          apostasia? Donne cattoliche e matrimoni misti nei dibattiti del
          sant&apos;Ufficio&quot;, in G. Ciappelli, S. Luzzi, M. Rospocher (a
          cura di),{" "}
          <i>
            Famiglia e religione nella prima età moderna. Saggi in onore di
            Silvana Seidel Menchi
          </i>
          , Rome, pp. 175-86
        </p>
        Gaudemet Jean (1987),{" "}
        <i>Le mariage en Occident: les mœurs et le droit</i>, Paris
        <p className={mainStyles.indent1}>
          Jemolo A.C. (1993),{" "}
          <i>
            Il matrimonio nel diritto canonico. Dal Concilio di Trento al Codice
            del 1917
          </i>
          , prefazione di J. Gaudemet, Bologna
        </p>
        <p className={mainStyles.indent1}>
          Lombardi Daniela (2001), <i>Matrimoni di antico regime</i>, Bologna
        </p>
        <p className={mainStyles.indent1}>
          Orlando Ermanno (2014),{" "}
          <i>
            Migrazioni mediterranee. Migranti, minoranze e matrimoni a Venezia
            nel basso mediovevo
          </i>
          , Bologne
        </p>
        <p className={mainStyles.indent1}>
          Rasi P. (1953-54), &quot;Le formalità nella celebrazione del
          matrimonio ed il Concilio di Trento&quot;,{" "}
          <i>Rivista di storia del diritto italiano</i>, XXVI-XXVII, pp. 189-207
        </p>
        Scaramella Paolo (2009), &quot;I dubbi sul sacramento del matrimonio e
        la questione dei matrimoni misti nella casistica delle congregazioni
        romane (secc. XVI-XVIII) &quot;, <i>MEFRIM</i>, 121, pp. 75-94
        <p className={mainStyles.indent1}>
          Scaramella Paolo (2011), &quot;Proibizione e pratica dei matrimoni
          misti nell&apos;Europa di Antico Regime. Note per una ricerca in
          corso&quot;, in G. Dall&apos;Olio, A. Malena, P. Scaramella (a cura
          di), <i>La Fede degli Italiani. Per A. Prosperi</i>, Pisa
        </p>
        <p className={mainStyles.indent1}>
          Seidel Menchi Silvana (2000), &quot;I processi matrimoniali come fonte
          storica&quot;, in S. Seidel Menchi e D. Quaglioni (a cura di),{" "}
          <i>
            Coniugi nemici. La separazione in Italia dal XII al XVIII secolo
          </i>
          , Bologna, pp. 25-6
        </p>
        <p className={mainStyles.indent1}>
          Seidel Menchi Silvana, Quaglioni Diego (a cura di) (2001),{" "}
          <i>
            Matrimoni in dubbio. Unioni controverse e nozze clandestine in
            Italia dal XIV al XVIII secolo
          </i>
          , Bologna
        </p>
        <p className={mainStyles.indent1}>
          Siebenhüner Kim (2006), <i>Bigamie und Inquisition in Italien</i>,
          1600-1750, Paderborn
        </p>
        <p className={mainStyles.indent1}>
          Siebenhüner Kim (2008), &quot;Conversion, Mobility and the Roman
          Inquisition in Italy around 1600&quot;, <i>Past & Present</i>, 200,
          pp. 5-35
        </p>
        <p className={mainStyles.indent1}>
          Zarri Gabriella (1996), &quot;Il matrimonio tridentino&quot;, in P.
          Prodi e W. Reinhard (a cura di),{" "}
          <i>Il Concilio di Trento e il moderno</i>, Bologna, pp. 437-83
        </p>
      </ion-grid>
    </ProcessettiGraficiLayout>
  );
};

export default Bibliografia;
export const getStaticProps: GetStaticProps<BibliografiaProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: "Progetto ANR Processetti",
        headTitle: "Bibliografia – Processetti",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};