import React from 'react';
import Comment from './Comment';

export default class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
            status: false
        }
    }

    _handleClick() {
        this.setState({
            status: !this.state.status
        });
    }

    render() {
        const commentsData = [
            {
                id: 1,
                author: 'Andriy',
                body: 'Some text 1'
            },
            {
                id: 2,
                author: 'Olex',
                body: 'Some text 2'
            },
            {
                id: 3,
                author: 'Lisa',
                body: 'Some text 3'
            },
            ];

        const list = commentsData.map( element => <Comment key={ element.id } data={ element } />);
        const buttonText = this.state.status ? 'Hide' : 'Show';

        return (
            <div>
                <h2>Comments block</h2>
                <button onClick={ this._handleClick.bind(this) }>{ buttonText }</button>
                { this.state.status ? list : null }
            </div>
        );
    }
}