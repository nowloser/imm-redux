import React,{Component} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import '../../css/'

class Base extends Component {

    render() {
        return (
            <div className="photo-container">
                <span>选择图片:</span>
                <i className="iconfont icon-tupian"/>
            </div>
        )


    }
}

export default Base