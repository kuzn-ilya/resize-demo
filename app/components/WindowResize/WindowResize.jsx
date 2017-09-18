import React from 'react';
import ReactDOM from 'react-dom';
import { InnerDiv } from '../InnerDiv';

export class WindowResize extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize(e) {
        if (this.props.onResize) {
            this.props.onResize(e);
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const {height} = this.props;
        return (
            <InnerDiv height={height}>{this.props.children}</InnerDiv>
        );
    }
}
