import React,{Component} from 'react'
import {connect} from 'react-redux'
import {} from '../action/action.jsx'
import Dropdown from '../component/Dropdown'

class Chat extends Component {
    shouldComponentUpdate(nextProps){
        // console.log(nextProps)
        console.log(nextProps.person1!==this.props.person1)
        return true
    }
    componentDidMount(){
        const {dispatch} = this.props
        setInterval(()=>{
            dispatch({
                type:'HHH',
                data:10
            })

            // dispatch({
            //     type:'HHHH',
            //     data:10
            // })
        },2000)
        // dispatch()
    }
    componentWillUpdate(){
        console.time(1)
    }

    componentDidUpdate(){
        console.timeEnd(1)
    }
    render() {
        // console.log(this.props.person1)
        // console.log(this.props.person.toJS())
        return (
            <div>
                <Dropdown>
                    <Dropdown.Head>
                        {this.props.person.get(0)}
                    </Dropdown.Head>
                    <Dropdown.Content>
                        {this.props.person1[0]}
                    </Dropdown.Content>
                </Dropdown>
            </div>
        )
    }
}


function storeFormatter({person,person1}) {
    return {person,person1}
}

export default connect(storeFormatter)(Chat)