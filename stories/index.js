import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { WindowResize } from '../app/components/WindowResize';
import { IFrameResize } from '../app/components/IFrameResize';

class WrapComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: '100%'
    };
    this.handleRandomHeight = this.handleRandomHeight.bind(this);
  }

  handleRandomHeight() {
    this.setState({
      height: (Math.random() * 100).toString() + '%'
    });
  }

  render() {
    const {Component} = {...this.props}
    return <Component {...this.props} height={this.state.height}>
      <button style={{position: 'absolute', right: 0, top: 0}} onClick={this.handleRandomHeight}>Random Height</button>
      {this.props.children}
    </Component>
  }
}

storiesOf('WindowResize', module)
  .add('default', () => <WrapComponent Component={WindowResize} onResize={action('resize')}>Window Resize</WrapComponent>);

storiesOf('IFrameResize', module)
  .add('default', () => <WrapComponent Component={IFrameResize} onResize={action('resize')}>IFrame Resize</WrapComponent>);
