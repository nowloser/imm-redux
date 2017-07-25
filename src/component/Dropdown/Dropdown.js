import React, {Component, Children} from 'react'
import classnames from 'classnames'
import '../../../css/dropdown.scss'
class Dropdown extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            active: false
        }

        // console.log(this.props.children)
    }

    toggleDropdown() {
        this.setState({
            active: !this.state.active
        })
    }


    render() {
        const dropClass = classnames({
            'dropdown-menu': true,
            'active': this.state.active
        })

        return (
            <div className='dropdown'>
                {React.Children.map(this.props.children,function (child) {
                    if(child.type.name ==='DropdownHead'){
                        return child
                    }
                })}
                <div className={dropClass} onClick={this.toggleDropdown.bind(this)}>

                </div>
            </div>
        )


    }
}
export default Dropdown