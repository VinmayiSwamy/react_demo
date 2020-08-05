import React from 'react';

class Welcome extends React.Component {
    render(){
        return (
            <div>
                {/* <h1>Welcome Component</h1> */}
                <h1> This is { this.props.name } </h1>
                <p>{ this.props.children }</p>
            </div>
        );
    }
}
export default Welcome;