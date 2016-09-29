import React from 'react';

export default class Comment extends React.Component {
    //Only ES7
    // static propTypes = {
    //     author: React.PropTypes.string.isRequired,
    //     body: React.PropTypes.string
    // };
    // static defaultProps = {
    //     title: 'Undefined Product'
    // };

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const data = this.props.data;

        return (
            <div>
                <h1>{ data.author }</h1>
                <p>{ data.body }</p>
                <span>{ this.props.title }</span>

            </div>
        );
    }
}