// https://stackoverflow.com/questions/6492683/how-to-detect-divs-dimension-changed
// chrome://flags/#enable-experimental-web-platform-features
// https://github.com/marcj/css-element-queries
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { WindowResize } from '../app/components/WindowResize';
import { IFrameResize } from '../app/components/IFrameResize';
import { ResizeObserve } from '../app/components/ResizeObserve';
import { OnScrollExpand } from '../app/components/OnScrollExpand';
import { OnScrollShrink } from '../app/components/OnScrollShrink';
import { ResizeSensor } from '../app/components/ResizeSensor';

class WrapComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {Component} = {...this.props}
    return <Component {...this.props} >
      {this.props.children}
    </Component>
  }
}

storiesOf('WindowResize', module)
  .add('default', () => <WrapComponent Component={WindowResize} onResize={action('resize')}>Window Resize</WrapComponent>);

storiesOf('IFrameResize', module)
  .add('default', () => <WrapComponent Component={IFrameResize} onResize={action('resize')}>IFrame Resize</WrapComponent>);

storiesOf('ResizeObserver', module)
  .add('default', () => <WrapComponent Component={ResizeObserve} onResize={action('resize')}>ResizeObserver</WrapComponent>);

storiesOf('OnScrollExpand', module)
  .add('default', () => <WrapComponent Component={OnScrollExpand} onResize={action('resize')}>OnScrollExpand</WrapComponent>);

storiesOf('OnScrollShrink', module)
  .add('default', () => <WrapComponent Component={OnScrollShrink} onResize={action('resize')}>OnScrollShrink</WrapComponent>);

storiesOf('ResizeSensor', module)
  .add('default', () => <WrapComponent Component={ResizeSensor} onResize={action('resize')}>ResizeSensor</WrapComponent>);
