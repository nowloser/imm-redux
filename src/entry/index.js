import React,{Component} from  'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configStore from '../store/store.jsx';
import Chat from '../container/chat.jsx';

//import 'bootstrap/distSms/css/bootstrap.css'
//import './css/font/iconfont.css'
//import './css/chat.scss'
const store = configStore()
render((
    <Provider store={store}>
        <Chat></Chat>
    </Provider>
), document.getElementById("content"))