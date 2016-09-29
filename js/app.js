import React from 'react';
import Comments from './Comments';

class App extends React.Component {
    render() {

        return (
            <div>
                <Comments />
            </div>
        );
    }
};

React.render(
    <App />,
    document.body
);
