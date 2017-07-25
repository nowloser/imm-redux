import React, {Component, Children} from 'react'
import classnames from 'classnames'
class DropdownHead extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <div>{this.props.children}</div>
    }
}
export default DropdownHead