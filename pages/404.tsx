import { IonApp, IonContent } from '@geovistory/design-system-react';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <IonApp>
        <IonContent>
          <h1>404 - Page Not Found</h1>
          <p>
              <Link href="/">
                <a>Go back home</a>
              </Link>
          </p>
        </IonContent>
      </IonApp>
    </>
  );
}
