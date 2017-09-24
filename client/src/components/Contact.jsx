import React, { PureComponent } from 'react'

export default class About extends PureComponent {
    render() {
        return (
            <div className="inner cover">
                <h1 className="cover-heading">Got any questions?</h1>
                <p className="lead">Ask Zaza because I am bad at react (and node and everything else for that matter)</p>
            </div>
        )
    }
}