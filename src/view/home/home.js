import React,{Component} from 'react'

import Header from '../header/header'

import '../home/home.css'
const hom = require('../../logo/hom.jpg')
class home extends Component {

    render(){
        return(
            <div>
                <Header/>
                <img src={hom} alt= "hom" className="home"></img>
            </div>
        )
    }
}

export default home

