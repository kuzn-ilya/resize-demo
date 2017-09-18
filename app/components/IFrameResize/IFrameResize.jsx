import React from 'react';

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
        const {onResize, children} = this.props;
        return (
            <div style={{position: 'relative', backgroundColor: 'yellow'}}>
                {children}
                <iframe 
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        border: 'none',
                        backgroundColor: 'transparent',
                        allowtransparency: true
                    }}
                    ref={(ref) => this.ref = ref}
                />
            </div>
        );
    }
};
