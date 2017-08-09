import React ,{Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {browserHistory} from 'react-router';
import './Mine.css';
class Mine extends Component {
	constructor(){
		super();
		this.state={
			hide:{display:"none"},
			hideNo:{display:"block"},
			name:"daiyu"
		}
		this.gologin = this.gologin.bind(this)
		this.out = this.out.bind(this)
	}
	 componentDidMount(){
        var store_name = JSON.parse(localStorage.getItem("loginInfo"));    
            if(store_name.name !== ""){
                this.setState({            
                 hide : {display:"block"},
                  hideNo : {display:"none"}
                })
           }      
    }
	render(){
		return(
			<div>
					<div id="contenr1">
						 <div className="logininfo">
						 		<div className="nologin center" style={this.state.hideNo}>
						 			<a className="loginbut" onClick={this.gologin}>登录/注册</a>
						 		</div>
								<div className="nologin center" style={this.state.hide}>
						 			<div className="headcon">
                                		<img className="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png" alt="" />
                          		     	 <div className="name">{this.state.name}</div>
                          		     </div>				 			
						 		</div>
						 		<div className="buttons">
						 			<a className="button deliver">投递</a>
						 			<a className="button interview">面试</a>
						 			<a className="button invitation ">邀约</a>
						 			<a className="button collect ">收藏</a>
						 		</div>
						 		<a className="longinout" style={this.state.hide} onClick={this.out}>退出登录</a>
						 </div>				
					</div>
			</div>
		)	
	}
	gologin(){
		browserHistory.push('/login');
	}
	out(){
		browserHistory.push('/mine');
	
		localStorage.setItem("loginInfo",JSON.stringify({
            name:""
        }))
        this.setState({
            hide : {display:"none"},
            hideNo : {display:"block"}
        })
	}
}
export default Mine;