import React from 'react';
import { InnerDiv } from '../InnerDiv';

export class OnScrollExpand extends React.PureComponent {
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
        this.sensor.onscroll = () => {
            that.handleResize();
            that.reset();
        }
    }

    reset() {
        this.sensorChild.style.width = '100000px';
        this.sensorChild.style.height = '100000px';

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
                            transition: '0s'                        
                        }}
                        ref={(ref) => this.sensorChild = ref}
                    >    
                    </div>'
                </div>
        </InnerDiv>
        );
    }
};
