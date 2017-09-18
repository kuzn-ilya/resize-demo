import React from 'react';
import { InnerDiv } from '../InnerDiv';

export class IFrameResize extends React.PureComponent {
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
        this.ref.contentWindow.addEventListener('resize', this.handleResize);       
    }

    componentWillUnmount() {
        this.ref.contentWindow.removeEventListener('resize', this.handleResize);       
    }

    render() {
        const {onResize, children, height} = this.props;
        return (
            <InnerDiv height={height}>
                {this.props.children}
                <iframe 
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        border: 'none',
                        backgroundColor: 'transparent',
                        allowtransparency: true,
                        zIndex: -1
                    }}
                    ref={(ref) => this.ref = ref}
                />
            </InnerDiv>
        );
    }
};
