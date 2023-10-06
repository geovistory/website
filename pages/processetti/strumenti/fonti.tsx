import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import ImageWrapper from '../../../components/elements/ImageWrapper.component';
import { HeadProps } from '../../../components/layouts/DefaultHead';
import { ProcessettiGraficiLayout } from '../../../components/project-specific/ProcessettiGraficiLayout.component';
import { strumentiLinks } from '../../../components/project-specific/ProcessettiNavbar.component';
import img1 from '../../../public/processetti/sources/img1.jpg';
import img2 from '../../../public/processetti/sources/img2.jpg';
import img3 from '../../../public/processetti/sources/img3.jpg';

export interface FontiProps {
  head: HeadProps;
}
const Fonti: NextPage<FontiProps> = (props) => {
  return (
    <ProcessettiGraficiLayout head={props.head} links={strumentiLinks}>
      <ion-grid>
        <h1>Fonti</h1>
        <p>
          Archivio storico del Patriarcato di Venezia,{' '}
          <i>Curia patriarcale di Venezia, Sezione antica</i>
        </p>
        <ul className="restricted-width">
          <li>
            <a
              href="https://siusa.archivi.beniculturali.it/cgi-bin/siusa/pagina.pl?TipoPag=comparc&Chiave=391897&RicProgetto=ev&RicSez=complessi&RicFrmRicSemplice=examinum&RicVM=ricercasemplice"
              target="_blank"
              rel="noreferrer"
            >
              Examinum Matrimoniorum{' '}
            </a>
          </li>

          <li>
            <a
              href="https://siusa.archivi.beniculturali.it/cgi-bin/siusa/pagina.pl?TipoPag=comparc&Chiave=391908&RicFrmRicSemplice=Filciae%20caus&RicVM=ricercasemplice&RicProgetto=ev&RicSez=complessi"
              target="_blank"
              rel="noreferrer"
            >
              Filcea Causarum{' '}
            </a>
          </li>

          <li>
            <a
              href="https://siusa.archivi.beniculturali.it/cgi-bin/siusa/pagina.pl?TipoPag=comparc&Chiave=391856&RicSez=complessi&RicPag=2&RicProgetto=ev&RicFrmRicSemplice=Diversorum&RicVM=ricercasemplice"
              target="_blank"
              rel="noreferrer"
            >
              Diversorum{' '}
            </a>
          </li>
        </ul>
        <h2>Descrizione della fonte</h2>
        <p>
          Poiché lo scopo di questa prescrizione era quello di certificare
          l’inesistenza di vincoli matrimoniali pregressi, ancorché contratti in
          altro luogo – o ancora in essere, nei casi di vedovanza – i testimoni
          convocati erano chiamati a pronunciarsi non solo sulla condizione
          contingenti dei richiedenti ma anche sul loro passato, e in
          particolare sui periodi in cui non avevano dimorato in città.
          Conseguentemente i testimoni erano indotti a documentare la continuità
          abitativa dei richiedenti a Venezia, i loro eventuali spostamenti
          fuori dai confini urbani e a dare contezza dei legami interpersonali,
          privilegiando quelli forti e duraturi.
        </p>
        <p>
          Generalmente un <i>processetto</i> si compone di una formula
          introduttiva in latino, dove sono riportate le generalità della
          persona inquisita (nome, patronimico e cognome, origini, professione,
          e parrocchia di abitazione o lavoro), così come la ragione o le
          ragioni che resero necessaria la singola indagine prematrimoniale. A
          seguire, la data cronica e topica dell’audizione e la trascrizione
          delle testimonianze, precedute dalla presentazione dei singoli
          testimoni, per cui nuovamente sono fornite le medesime generalità.
          All’interno delle testimonianze, in volgare, possono emergere una
          serie di informazioni più complesse e articolate, che costituiscono le
          risposte al questionario stabilito dalle autorità ecclesiastiche
          veneziane: l’occasione di conoscenza tra richiedenti e testimoni (e
          tra testimone e il defunto, se l’inchiesta era atta a verificare la
          condizione vedovile), le conseguenti relazioni sociali, il tempo di
          permanenza in città e gli spostamenti dell’inquisito (o del defunto),
          avvenuti prima e dopo l’arrivo a Venezia, eventuali trasferimenti da
          una contrada all’altra, l’età del richiedente e l’eventuale
          consanguineità. Chiude la singola testimonianza la formula di rito,
          nuovamente in latino, con la conferma da parte del testimone della
          veridicità del dichiarato e la conformità di quanto riportato per
          iscritto, nonché l’indicazione della sua età.
        </p>
        <p>
          <ImageWrapper
            legend={
              'ASPVe, Curia patriarcale di Venezia, Sezione antica, Examinum Matrimoniorum, vol. 2, cc. n.n., r'
            }
            imageUrls={['/processetti/sources/img1.jpg']}
            dialogChildren={
              <Image
                src={img1}
                alt="Struttura e contenuti del processetto matrimoniale"
              />
            }
          >
            <Image
              src={img1}
              placeholder="blur"
              width={608}
              height={365}
              objectFit={'scale-down'}
              alt="Struttura e contenuti del processetto matrimoniale"
            />
          </ImageWrapper>
        </p>

        <p>
          <ImageWrapper
            legend={
              'ASPVe, Curia patriarcale di Venezia, Sezione antica, Examinum Matrimoniorum, vol. 2, cc. n.n., r'
            }
            imageUrls={['/processetti/sources/img2.jpg']}
            dialogChildren={
              <Image
                src={img2}
                alt="Struttura e contenuti del processetto matrimoniale"
              />
            }
          >
            <Image
              src={img2}
              placeholder="blur"
              width={608}
              height={365}
              objectFit={'scale-down'}
              alt="Struttura e contenuti del processetto matrimoniale"
            />
          </ImageWrapper>
        </p>
        <p>
          <ImageWrapper
            legend={
              'ASPVe, Curia patriarcale di Venezia, Sezione antica, Examinum Matrimoniorum, vol. 2, cc. n.n., r'
            }
            imageUrls={['/processetti/sources/img3.jpg']}
            dialogChildren={
              <Image
                src={img3}
                alt="Struttura e contenuti del processetto matrimoniale"
              />
            }
          >
            <Image
              src={img3}
              placeholder="blur"
              width={608}
              height={365}
              objectFit={'scale-down'}
              alt="Struttura e contenuti del processetto matrimoniale"
            />
          </ImageWrapper>
        </p>
        <p>
          Sebbene nel corso del primo decennio di introduzione della procedura,
          il <i>tenor</i> delle interrogazioni rivolte ai testimoni venne a
          stabilizzarsi e la trascrizione delle risposte subì una tendenziale
          normalizzazione la natura stessa delle inchieste, con la necessità di
          ricostruire momenti salienti delle biografie dei richiedenti, mantenne
          costantemente una dimensione irriducibilmente ‘narrativa’, basata sul
          resoconto orale.
        </p>
      </ion-grid>
    </ProcessettiGraficiLayout>
  );
};

export default Fonti;
export const getStaticProps: GetStaticProps<FontiProps> = async () => {
  return {
    props: {
      head: {
        headOgDescription: 'Progetto ANR Processetti',
        headTitle: 'Fonti – Processetti',
        headOgImage: '/socialimage/processetti.jpg',
      },
    },
  };
};
