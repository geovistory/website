import React from 'react';
import styles from './YoutubeEmbed.module.css';

export interface YoutubeEmbedProps {
  embedId: string;
  title: string;
}

export const YoutubeEmbed = ({ embedId, title }: YoutubeEmbedProps) => (
  <div className={styles.container}>
    <iframe
      className={styles.iframe}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);
