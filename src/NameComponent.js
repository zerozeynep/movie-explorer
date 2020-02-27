import React from 'react';

class NameComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}

export default NameComponent;