import React from 'react';

export default class WindowResize extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }
}
