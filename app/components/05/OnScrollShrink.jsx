import React from 'react';
import { InnerDiv } from '../InnerDiv';

export class OnScrollShrink extends React.PureComponent {
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
        this.reset();
        const that = this;
        this.sensor.onscroll = (e) => {
            that.handleResize(e);
            that.reset();
        }
    }

    reset() {
        this.sensor.scrollLeft = 100000;
        this.sensor.scrollTop = 100000;
    }

    render() {
        const {onResize, children, height} = this.props;
        return (
            <InnerDiv height={height}>
                {this.props.children}
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        zIndex: -1,
                        visibility: 'hidden'
                    }}
                    ref={(ref) => this.sensor = ref}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            transition: '0s',
                            width: '200%',
                            height: '200%'
                        }}
                        ref={(ref) => this.sensorChild = ref}
                    >    
                    </div>'
                </div>
        </InnerDiv>
        );
    }
};
