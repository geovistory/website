/* eslint-disable import/no-anonymous-default-export */
import { StoryFn } from '@storybook/react';
import { ImageWrapper as ImageWrapperComponent } from './ImageWrapper.component';
import { FigCaption } from './FigCaption.component';
import Image from 'next/image';
import bannerImg from '../../public/basel-non-protestants.jpg';
export default {
  title: 'Components/Elements/ImageWrapper',
  component: ImageWrapperComponent,
  decorators: [
    (Story: any) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ImageWrapper: StoryFn<typeof ImageWrapperComponent> = () => (
  <ImageWrapperComponent
    caption={'Caption Caption Caption Caption Caption Caption'}
    imageUrls={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
    ]}
  >
    <ion-img
      alt="Caption Caption Caption Caption Caption Caption"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
    ></ion-img>
  </ImageWrapperComponent>
);

export const NoDialog: StoryFn<typeof ImageWrapperComponent> = () => (
  <ImageWrapperComponent
    caption={'Caption Caption Caption Caption Caption Caption'}
    noDialog={true}
    imageUrls={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
    ]}
  >
    <ion-img
      alt="Caption Caption Caption Caption Caption Caption"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
    ></ion-img>
  </ImageWrapperComponent>
);
export const CustomCaption: StoryFn<typeof ImageWrapperComponent> = () => (
  <ImageWrapperComponent
    caption={
      <FigCaption>
        Caption Caption Caption Caption Caption Caption Caption Caption Caption
        Caption Caption Caption
      </FigCaption>
    }
    noDialog={true}
    imageUrls={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
    ]}
  >
    <ion-img
      alt="Caption Caption Caption Caption Caption Caption"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
    ></ion-img>
  </ImageWrapperComponent>
);
export const CustomCaptionCollapsed: StoryFn<
  typeof ImageWrapperComponent
> = () => (
  <ImageWrapperComponent
    caption={
      <FigCaption collapsible={true} collapsed={true}>
        Caption Caption Caption Caption Caption Caption Caption Caption Caption
        Caption Caption Caption
      </FigCaption>
    }
    noDialog={true}
    imageUrls={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
    ]}
  >
    <ion-img
      alt="Caption Caption Caption Caption Caption Caption"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
    ></ion-img>
  </ImageWrapperComponent>
);
export const CustomCaptionExpanded: StoryFn<
  typeof ImageWrapperComponent
> = () => (
  <ImageWrapperComponent
    caption={
      <FigCaption collapsible={true} collapsed={false}>
        Caption Caption Caption Caption Caption Caption Caption Caption Caption
        Caption
      </FigCaption>
    }
    noDialog={true}
    imageUrls={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
    ]}
  >
    <ion-img
      alt="Caption Caption Caption Caption Caption Caption"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
    ></ion-img>
  </ImageWrapperComponent>
);
export const CustomCaptionTopLeft: StoryFn<
  typeof ImageWrapperComponent
> = () => (
  <ImageWrapperComponent
    caption={
      <FigCaption collapsible={true} collapsed={false} position='tl'>
        Caption Caption Caption Caption Caption Caption Caption Caption Caption
        Caption
      </FigCaption>
    }
    noDialog={true}
    imageUrls={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
    ]}
  >
    <ion-img
      alt="Caption Caption Caption Caption Caption Caption"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
    ></ion-img>
  </ImageWrapperComponent>
);

export const NoCaption: StoryFn<typeof ImageWrapperComponent> = () => (
  <ImageWrapperComponent
    imageUrls={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
    ]}
  >
    <ion-img
      alt="Caption Caption Caption Caption Caption Caption"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
    ></ion-img>
  </ImageWrapperComponent>
);

export const Banner: StoryFn<typeof ImageWrapperComponent> = () => (
  <div style={{ height: '300px' }}>
    <ImageWrapperComponent
      imageUrls={[
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg',
      ]}
      height='100%'
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif/lossy-page1-1567px-ETH-BIB-Sargans_aus_200_m-Inlandfl%C3%BCge-LBS_MH01-002300.tif.jpg"
        alt="Roman Forum"
        layout="fill"
        objectFit={'cover'}
      />
    </ImageWrapperComponent>
  </div>
);
