import React from 'react';
import ReactDOM from 'react-dom';
import { InnerDiv } from '../InnerDiv';
import { ResizeSensor as RS } from 'css-element-queries';

export class ResizeSensor extends React.PureComponent {
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
        const element = document.querySelector('#inner-div');
        this.resizeSensor = new RS(element, this.handleResize);
    }

    componentWillUnmount() {
        //RS.detach(ReactDOM.findDOMNode(this.ref), this.handleResize);
    }

    render() {
        return (
            <InnerDiv id='inner-div'>
                {this.props.children}
            </InnerDiv>
        );
    }
};
