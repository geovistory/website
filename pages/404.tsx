import Link from 'next/link';
export default function FourOhFour() {
  return (
    <>
      <ion-app>
        <ion-content>
          <h1>404 - Page Not Found</h1>
          <p>
            <Link href="/">
              <a>Go back home</a>
            </Link>
          </p>
        </ion-content>
      </ion-app>
    </>
  );
}
