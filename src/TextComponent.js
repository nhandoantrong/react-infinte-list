import React, { Component } from 'react'

export default class TextComponent extends Component {
    render() {
        return (
            <div style={{color: 'white', backgroundColor: '#121212'}}>
                {this.props.value}
            </div>
        )
    }
}
