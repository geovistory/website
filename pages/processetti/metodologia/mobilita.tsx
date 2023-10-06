/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from "next";
import { GraficiTabelleProps } from "../../../components/project-specific/GraficiTabelleProps";
import { ProcessettiGraficiLayout } from "../../../components/project-specific/ProcessettiGraficiLayout.component";
import { metodologiaLinks } from "../../../components/project-specific/ProcessettiNavbar.component";
import ImageWrapper from "../../../components/elements/ImageWrapper.component";
import Image from "next/image";
import img1 from "../../../public/processetti/metodologia/mobilita.png";

const P: NextPage<GraficiTabelleProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={metodologiaLinks}>
      <ion-grid fixed>
        <h1>Mobilità</h1>

        <p>
          I processetti rappresentano una fonte eccezionale anche per quanto
          riguarda lo studio della mobilità sia fuori Venezia, sia all’interno
          del tessuto cittadino.
        </p>
        <p>
          Per quanto concerne la mobilità <i>extra</i> urbana e il fenomeno
          migratorio verso la laguna, è stata registrata un’ampia casistica, che
          riflette la complessità di tali spostamenti.
        </p>
        <p>
          La mobilità degli attori è documentata da quasi 2.000 resoconti (
          <i>Accounts of journey or stay</i>) che comprendono gli spostamenti
          prima dell’arrivo a Venezia (“Tappe intermedie tra il paese d’origine
          e l’arrivo a Venezia”), ma anche quelli successivi all’approdo in
          laguna (“Ritorno temporaneo al paese d’origine”, “Spostamento
          temporaneo fuori Venezia”, “Cambiamento di abitazione da Venezia ad
          altra città”).
        </p>
        <p>
          La descrizione di questo aspetto è peraltro arricchita dal ricorso a
          un repertorio di concetti in grado di precisarne le circostanze (ad
          esempio relativo alle ragioni dello spostamento: “Ragioni
          professionali”, “Bando”, “Sollazzo”, “Malattia” ecc.; alle modalità:
          “Viaggio marittimo”, “Navigazione fluviale”, “Spostamento al seguito”
          ecc.; alla durata - almeno per i casi in cui l'indicazione assume
          termini che non permettano una loro determinazione cronologica: “Per
          poco tempo”, “Molte settimane”, “Qualche anno” ecc.).
        </p>
        <p>
          Tramite la definizione di uno specifico vocabolario controllato è
          descritta anche la frequenza degli spostamenti (“Una volta”, “Due
          volte”, “Una volta all'anno” etc.).{" "}
        </p>
        <p>
          Più problematica è la resa diacronica, ovvero la rappresentazione del
          loro susseguirsi ordinato nel tempo, sia per la consueta assenza di
          informazioni puntuali, e quindi puntualizzabili, sia per l’inevitabile
          necessità di trovare un adeguato compromesso tra mezzi e scopi; la
          definizione di modalità più articolate per il trattamento di eventi
          dalla temporalità spesso intrecciata, avrebbe comportato l’assunzione
          di un modello descrittivo assai complesso e quindi determinato
          modalità di produzione molto più lente.{" "}
        </p>
        <p>
          Ciò non di meno gli <i>Account of journey</i> or stay rimangono
          utilissimi nella rappresentazione di itinerari a volte anche molto
          complessi.
        </p>
        <p>
          Va aggiunto, però, che la prospettiva di analisi nell’ambito del
          progetto non è unicamente interessata alla mobilità extra urbana ma
          anche a quella <i>intra</i> urbana o residenziale. La ferma volontà di
          tenerne traccia ha portato alla definizione di un modello che,
          attraverso la proprietà di localizzazione delle entità, risulta in
          grado di identificare e registrare la parrocchia (e alcune aree
          urbane) come luogo di lavoro, luogo di abitazione, o forme intermedie,
          ad esempio “Abitazione e possibile luogo di lavoro” o “Luogo di lavoro
          e possibile abitazione”, e quindi di poter potenzialmente tracciare
          sia la mobilità &quote;residenziale&quot; che quella lavorativa; là
          dove possibile con attenzione alla successione temporale.
        </p>
        <p>
          <ImageWrapper
            legend={
              "Il processetto di Clemente Puchiarino da Arezzo (ASPVe, Curia patriarcale di Venezia, Sezione antica, Examinum Matrimoniorum, vol. 3, cc. n.n., 31r-32r) datato 26 gennaio 1596, descrive una varietà di traiettorie che comprendono diversi spostamenti dopo il suo trasferimento in laguna. Clemente partecipò alla guerra di Cipro (1570-1573) e in quell’occasione venne ridotto in schiavitù dai Turchi a Costantinopoli. Solo dopo 12 anni di prigionia riuscì a fuggire, soggiornando prima a Corfù e rientrando poi a Venezia. Successivamente venne ingaggiato, almeno due volte, come capitano nell’Armata della Serenissima, e come tale si recò a Creta, per una durata complessiva non inferiore a 10 anni. Nel suo peregrinare Clemente trovò l’occasione di tornare al paese d’origine, Arezzo: una prima volta, per pochi giorni, al ritorno dalla prigionia; la seconda in un momento compreso tra i due periodi trascorsi a Candia."
            }
            imageUrls={["/processetti/metodologia/mobilita.png"]}
            dialogChildren={
              <iframe
                frameBorder="0"
                style={{ width: "100%", height: "100%" }}
                src="/processetti/metodologia/mobilita.html"
              />
            }
          >
            <Image
              src={img1}
              placeholder="blur"
              width={608}
              height={405}
              objectFit={"scale-down"}
              alt="Mappa - Il processetto di Clemente Puchiarino da Arezzo."
            />
          </ImageWrapper>
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
        headOgDescription: "Metodologia > Mobilità",
        headTitle: "Metodologia > Mobilità",
        headOgImage: "/socialimage/processetti.jpg",
      },
    },
  };
};
