import type { GetStaticProps, NextPage } from 'next';
import {
  DefaultPage,
  DefaultPageProps,
} from '../components/layouts/DefaultPage.component';
import { projectsParams } from '../lib/projectParams';

export interface ResourcesProps {
  defaultPage: DefaultPageProps;
}

const Resources: NextPage<ResourcesProps> = (props) => {
  return (
      <DefaultPage {...props.defaultPage}>
        <h1>Mentions légales / Legal notice</h1>
        <p>
          Le projet Geovistory ayant pris fin en décembre 2025, le site
          geovistory.org a été repris par le LARHRA et conservé à titre
          d&apos;archives.
        </p>
        <p>
          As the Geovistory project came to an end in December 2025, the
          geovistory.org website was taken over by LARHRA and retained for
          archival purposes.
        </p>

        <h2>Éditeur du site / Website publisher</h2>
        <p>
          Le site geovistory.org est édité par le LARHRA / The geovistory.org
          website is published by the LARHRA:
        </p>
        <address>
          MSH Lyon Saint-Étienne
          <br />
          14 Avenue Berthelot
          <br />
          69363 LYON CEDEX 07
          <br />
          France
        </address>
        <ul className="restricted-width">
          <li>
            Directeur de la publication / Director of publication : Stéphane
            Frioux.
          </li>
          <li>
            Responsable éditorial / Responsible editor : Pierre Vernus.
          </li>
          <li>
            Contact :{' '}
            <a href="mailto:contact-arhn@larhra.fr">contact-arhn@larhra.fr</a>.
          </li>
        </ul>

        <h2>Hébergement / Hosting</h2>
        <p>
          Le site est hébergé par l&apos;infrastructure de recherche du CNRS
          Huma-Num / The website is hosted by the CNRS research infrastructure
          Huma-Num:
        </p>
        <address>
          Centre National de la Recherche Scientifique (CNRS) — IR* Huma-Num
          <br />
          54 boulevard Raspail
          <br />
          75006 Paris
          <br />
          France.
        </address>

        <h2>Propriété intellectuelle / Intellectual Property</h2>
        <p>
          Sauf mention contraire, le contenu de ce site est publié sous licence{' '}
          <a
              target="_blank"
              rel="noreferrer"
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr"
          >
            Creative Commons Attribution - Partage dans les mêmes conditions 4.0
            International
          </a>
          .
        </p>
        <p>
          Except where otherwise noted, content on this site is licensed under a{' '}
          <a
              target="_blank"
              rel="noreferrer"
              href="https://creativecommons.org/licenses/by-sa/4.0/"
          >
            Creative Commons Attribution-ShareAlike 4.0 International license
          </a>
          .
        </p>

        <h2>Données personnelles / Personal Data</h2>
        <p>
          Aucune donnée personnelle n&apos;est collectée / No personal data is
          collected.
        </p>

        <h2>Crédits des images et vidéos / Images credits</h2>
        <h3>Sur la page d&apos;accueil / On the home page</h3>
        <ul className="restricted-width">
          <li>
            Scale model of Lugdunum (Musée Lugdunum - Lyon): Quentin Chevrier -
            Muséomix{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by/2.0/"
            >
              CC BY 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/88907899@N06/8107916332"
            >
              La projection sur la maquette de Lugdunum est parfaitement
              calibrée par l&apos;équipe Makus (jour 2)
            </a>
          </li>
          <li>
            Bayeux Tapestry (detail), 11th century: Megathud{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by-nc-nd/2.0/"
            >
              CC BY-NC-ND 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/91899953@N00/2667606495"
            >
              Tapisserie de Bayeux
            </a>
          </li>
          <li>
            Résurrection des morts, stained glass from the Sainte-Chapelle, ca.
            1200 (Musée national du Moyen Âge - Paris): Public domain{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://commons.wikimedia.org/wiki/File:Resurrection_dead_MNMA_DS_1893.jpg"
            >
              File:Resurrection dead MNMA DS 1893.jpg
            </a>
          </li>
          <li>
            Arabian astrolabe, 13th century (New York Metropolitan Museum of Art):
            Charles Tilford{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by-nc-sa/2.0/"
            >
              CC BY-NC-SA 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/51159953@N00/189670488"
            >
              BD479 Astrolabe
            </a>
          </li>
          <li>
            Quetzalcoatl as depicted in the Codex Magliabechiano, 16th century:
            Public domain{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://commons.wikimedia.org/wiki/File:Quetzalcoatl_magliabechiano.jpg?uselang=fr"
            >
              File:Quetzalcoatl magliabechiano.jpg
            </a>
          </li>
          <li>
            Benin Bronzes, 16th-17th century (British Museum - London):
            Jean-Pierre Dalbéra{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by/2.0/"
            >
              CC BY 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/72746018@N00/8716568947"
            >
              Bronze du Bénin (British Museum)
            </a>
          </li>
          <li>
            Map of America by Huych Allard, 1665 (Norman B. Leventhal Map Center -
            Boston): Norman B. Leventhal Map Center{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by/2.0/"
            >
              CC BY 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/normanbleventhalmapcenter/4072630072/"
            >
              Americae
            </a>
          </li>
          <li>
            Assemblée des trois ordres du Dauphiné au château de Vizille le 21
            Juillet 1788 by Alexandre Debelle, 1862 (Musée de la Révolution
            française - Vizille): Public domain{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://collections.isere.fr/fr/museum/document/assemblee-des-trois-ordres-du-dauphine-au-chateau-de-vizille-le-21-juillet-1788/ec7da15a-c3f2-406e-8391-e05c7f49bf62?q=alexandre%20debelle&pos=13"
            >
              Assemblée des trois ordres du Dauphiné au château de Vizille le 21
              Juillet 1788
            </a>
          </li>
          <li>
            Death record, 19th century: Serge Ottaviani{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
            >
              CC BY-SA 4.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://commons.wikimedia.org/w/index.php?curid=37856359"
            >
              File:Catastrophe d&apos;Aniche 24 février 1827 - état civil - acte
              de décès 32 Constant Héroguez.jpg - Wikimedia Commons
            </a>
          </li>
          <li>
            A Righteous War to Chastise the Russians: The Destroyer Force&apos;s
            Night Attack by Shinohara Kiyooki, 1904 (Museum of Fine Arts -
            Boston): Public domain{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://collections.mfa.org/objects/129741"
            >
              https://collections.mfa.org/objects/129741
            </a>
          </li>
          <li>
            Congress of the Permanent Council for the International Co-operation
            of Composers, Vichy, 1935 (Musée de l’opéra de Vichy) Jean-Pierre
            Dalbéra{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by/2.0/"
            >
              CC BY 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/72746018@N00/50166914111"
            >
              Le premier congrès international de la musique (musée de
              l&apos;Opéra de Vichy)
            </a>
          </li>
          <li>
            Union Station, Toronto, 2013: Paul Bica{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by/2.0/"
            >
              CC BY 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/99771506@N00/2704487136"
            >
              spotted
            </a>
          </li>
        </ul>

        <h3>Sur la page &quot;about us&quot; / On the &quot;about us&quot; page</h3>
        <ul className="restricted-width">
          <li>
            Geovistory team, 2022: Geovistory.org{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by-sa/4.0/"
            >
              CC BY-SA 4.0
            </a>
          </li>
          <li>
            Roofs of Lyon, 2009: @lain G{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by-sa/2.0/"
            >
              CC BY-SA 2.0
            </a>{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.flickr.com/photos/23747661@N07/3694871566"
            >
              Lyon
            </a>
          </li>
          <li>
            Basle : prise de la rive droite by N. Weiss after Anton Winterlin,
            ca. 1855 (Universitätsbibliothek Basel): Public domain{' '}
            <a
                target="_blank"
                rel="noreferrer"
                href="https://doi.org/10.3931/e-rara-90660"
            >
              Winterlin, Anton: Basle : prise de la rive droite. Basle : Lith de
              Hasler &amp; Cie, [um 1855]
            </a>
          </li>
        </ul>
      </DefaultPage>
  );
};

export default Resources;

export const getStaticProps: GetStaticProps<ResourcesProps> = async () => {
  return {
    props: {
      defaultPage: {
        head: {
          headTitle: 'Legal Notice',
          headOgDescription: 'Legal Notice',
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