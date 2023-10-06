import { createAnimation } from '@ionic/core';
import { closeOutline, downloadOutline, expandOutline } from 'ionicons/icons';
import React, {
  FunctionComponent,
  LegacyRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './ImageWrapper.module.css';
interface ImageWithDownloadProps {
  imageUrls: string[];
  legend?: string;
  dialogChildren?: ReactNode;
  noDialogPadding?: boolean;
}

const ImageWrapper: FunctionComponent<ImageWithDownloadProps> = ({
  imageUrls,
  legend,
  children,
  dialogChildren,
  noDialogPadding,
}) => {
  // const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef: LegacyRef<HTMLIonModalElement> = useRef(null);
  const handleDownload = () => {
    imageUrls.forEach((imageUrl) => {
      // Create a fake anchor element to trigger the download
      const link = document.createElement('a');
      link.href = imageUrl;

      // Set the filename
      const parts = imageUrl.split('/');
      link.download = parts[parts.length - 1];

      // Download
      link.click();
    });
  };
  const enterAnimation = (baseEl: any) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop'))
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper'))
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };
  const leaveAnimation = (baseEl: any) =>
    enterAnimation(baseEl).direction('reverse');
  useEffect(() => {
    if (modalRef?.current)
      (modalRef.current.enterAnimation = enterAnimation),
        (modalRef.current.leaveAnimation = leaveAnimation);
  });
  const openModal = () => {
    modalRef.current?.present();
  };
  const closeModal = () => {
    modalRef.current?.dismiss();
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <ion-modal class={styles.modal} ref={modalRef}>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>{legend}</ion-title>
            <ion-buttons slot="end">
              <ion-button
                title="download"
                color=""
                fill="clear"
                onClick={handleDownload}
              >
                <ion-icon slot="icon-only" icon={downloadOutline}></ion-icon>
              </ion-button>
              <ion-button
                title="close"
                color=""
                fill="clear"
                onClick={closeModal}
              >
                <ion-icon slot="icon-only" icon={closeOutline}></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class={noDialogPadding ? '' : 'ion-padding'}>
          {dialogChildren ?? children}
        </ion-content>
      </ion-modal>

      <div
        style={{ position: 'relative', cursor: 'pointer' }}
        onClick={openModal}
      >
        {children}
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        >
          <ion-button
            color="primary"
            fill="clear"
            size="small"
            onClick={openModal}
          >
            <ion-icon slot="icon-only" icon={expandOutline}></ion-icon>
          </ion-button>
        </div>
      </div>
      {legend && (
        <div
          style={{
            paddingTop: '0.5rem',
            textAlign: 'center',
          }}
        >
          <ion-label
            style={{
              color: 'var(--ion-color-step-500)',
            }}
          >
            {legend}
          </ion-label>
        </div>
      )}
    </div>
  );
};

export default ImageWrapper;
