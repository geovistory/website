import { closeOutline, downloadOutline, expandOutline } from 'ionicons/icons';
import React, { FunctionComponent, useEffect, useState } from 'react';
interface ImageWithDownloadProps {
  imageUrls: string[];
  legend?: string;
}

const ImageWrapper: FunctionComponent<ImageWithDownloadProps> = ({
  imageUrls,
  legend,
  children,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

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
  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isFullscreen && event.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <>
      {isFullscreen ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
            zIndex: 9999,
          }}
        >
          {children}
          <div style={{ position: 'fixed', top: '1rem', right: '2rem', zIndex: 1 }}>
            <ion-button color="primary" fill="solid" onClick={handleDownload}>
              <ion-icon slot="icon-only" icon={downloadOutline}></ion-icon>
            </ion-button>
            <ion-button
              color="primary"
              fill="solid"
              onClick={handleToggleFullscreen}
            >
              <ion-icon slot="icon-only" icon={closeOutline}></ion-icon>
            </ion-button>
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
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
              onClick={handleDownload}
            >
              <ion-icon slot="icon-only" icon={downloadOutline}></ion-icon>
            </ion-button>
            <ion-button
              color="primary"
              fill="clear"
              size="small"
              onClick={handleToggleFullscreen}
            >
              <ion-icon slot="icon-only" icon={expandOutline}></ion-icon>
            </ion-button>
          </div>
        </div>
      )}
      {legend && (
        <div
          style={{
            paddingTop: '0.5rem',
            textAlign: 'center'
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
    </>
  );
};

export default ImageWrapper;
