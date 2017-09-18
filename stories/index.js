// https://stackoverflow.com/questions/6492683/how-to-detect-divs-dimension-changed
// chrome://flags/#enable-experimental-web-platform-features
// https://github.com/marcj/css-element-queries
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { WindowResize } from '../app/components/01';
import { IFrameResize } from '../app/components/02';
import { ResizeObserve } from '../app/components/03';
import { OnScrollExpand } from '../app/components/04';
import { OnScrollShrink } from '../app/components/05';
import { ResizeSensor } from '../app/components/06';

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

storiesOf('OnResize', module)
  .add('01', () => <WrapComponent Component={WindowResize} onResize={action('resize')}>Window Resize</WrapComponent>)
  .add('02', () => <WrapComponent Component={IFrameResize} onResize={action('resize')}>IFrame Resize</WrapComponent>)
  .add('03', () => <WrapComponent Component={ResizeObserve} onResize={action('resize')}>ResizeObserver</WrapComponent>)
  .add('04', () => <WrapComponent Component={OnScrollExpand} onResize={action('resize')}>OnScrollExpand</WrapComponent>)
  .add('05', () => <WrapComponent Component={OnScrollShrink} onResize={action('resize')}>OnScrollShrink</WrapComponent>)
  .add('06', () => <WrapComponent Component={ResizeSensor} onResize={action('resize')}>ResizeSensor</WrapComponent>);
