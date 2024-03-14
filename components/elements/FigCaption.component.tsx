import { closeCircleOutline, informationCircle } from 'ionicons/icons';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';

export const FigCaption: FunctionComponent<{
  position?: 'br' | 'tl';
  style?: React.CSSProperties;
  collapsible?: boolean;
  collapsed?: boolean;
}> = (props) => {
  const [collapsed, setCollapsed] = useState(props.collapsed);

  if (!props.collapsible) return renderExpanded(props.children);

  return collapsed ? renderCollapsed() : renderExpanded(props.children);

  function renderCollapsed() {
    const positionFigCaption: React.CSSProperties =
      props.position === 'tl'
        ? { top: '1rem', left: '1rem' }
        : { bottom: '1rem', right: '1rem' };
    return (
      <figcaption
        style={{
          position: 'absolute',
          ...positionFigCaption,
          padding: '0',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <ion-button
          // style={{ float: 'right', margin: '-.2rem ' }}
          size="small"
          fill="clear"
          color="light"
          onClick={() => setCollapsed(false)}
        >
          <ion-icon icon={informationCircle}></ion-icon>
        </ion-button>
      </figcaption>
    );
  }
  function renderExpanded(children: ReactNode) {
    const positionButton: React.CSSProperties =
      props.position === 'tl' ? { float: 'left' } : { float: 'right' };
    const positionFigCaption: React.CSSProperties =
      props.position === 'tl'
        ? { top: '0rem', left: '0rem', right: '0rem', margin: '1rem' }
        : { bottom: '0rem', left: '0rem', right: '0rem', margin: '1rem 1rem 1rem auto' };
    const btn = (
      <ion-button
        style={{ ...positionButton, margin: '0 -.2rem -.2rem 0' }}
        size="small"
        fill="clear"
        color="light"
        onClick={() => setCollapsed(true)}
      >
        <ion-icon icon={closeCircleOutline}></ion-icon>
      </ion-button>
    );
    return (
      <figcaption
        style={{
          ...positionFigCaption,
          position: 'absolute',
          padding: '.2rem',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <ion-label
          style={{
            color: '#fff',
          }}
        >
          {props.position === 'tl' ? (
            <>
              {btn} {children}
            </>
          ) : (
            <>
              {children} {btn}
            </>
          )}
        </ion-label>
      </figcaption>
    );
  }
};
