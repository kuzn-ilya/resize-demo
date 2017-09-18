import React from 'react';
import ReactDOM from 'react-dom';
import { InnerDiv } from '../InnerDiv';

export class ResizeObserve extends React.Component {
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
        var ro = new ResizeObserver( entries => {
            for (let entry of entries) {
              if (entry.target.id === 'observable')
                  this.handleResize(entry);
            }
    
        });
        ro.observe(document.querySelector('#observable'));
    }

    render() {
        const {height} = this.props;
        return (
            <InnerDiv id='observable' height={height}>{this.props.children}</InnerDiv>
        );
    }
}
