import React, {PureComponent} from 'react'

export default class About extends PureComponent {
    render() {
        return (
            <div className="inner cover">
                <h1 className="cover-heading">Javascript Everywhere</h1>
                <p className="lead">This archive is made with Node.js and React(Which I'm hoping to learn). The two communicate through async http requests handled by Redux-saga... Yes the author of this tutorial loves Redux (and I hope to learn it too)</p>
            </div>
        )
    }
}