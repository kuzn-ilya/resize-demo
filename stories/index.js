import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { WindowResize } from '../app/components/WindowResize';
import { IFrameResize } from '../app/components/IFrameResize';

storiesOf('WindowResize', module)
  .add('default', () => <WindowResize onResize={action('resize')}>Window Resize</WindowResize>);

storiesOf('IFrameResize', module)
  .add('default', () => <IFrameResize onResize={action('resize')}>IFrame Resize</IFrameResize>);
