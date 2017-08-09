import React,{Component} from "react";
import './Login.css';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
class Login extends Component{
	constructor(){
		super();
		this.state={
			open:false,
			emptyPhone:false,
			emptyPwd:false
		}
		this.loginInto = this.loginInto.bind(this);
		this.hand = this.hand.bind(this);
		
	}
	render(){
		var hide = {display:"none"},show = {display:"block"}
		return(
			<div id="all">
				<div id='new-wrapper'>
				  <form className="new_register">
						<div>
					 	 	<input type="text" placeholder="已验证手机/邮箱" className="user" id="phone"/>
					 	 	<span  id="error1" className="input_tips" style={this.state.emptyPhone?show:hide}>请输入正确的账号</span>
						</div>
					   <div>
					  		<input type="password" placeholder="密码" className="pws" id="pws"/>			
					  		<i className={this.state.open?"open":"eye"} onClick={this.hand}></i>
					   </div>
					   <div className="Buton">
				     	 <input type="button" value="登录" onClick={this.loginInto}/>
				        </div>
				        <div className="register_text">
				  			还没有账号?	
				  		</div>
				  	 <Link to="/Register">
				  	 	<a className="register">注册</a>
				  	 </Link>
				  		
				  </form>
				  	
				</div>	
			</div>
		)
	}
	loginInto(){
	   var phone = document.getElementById("phone").value;
	   var pws = document.getElementById("pws").value;
	 
//	 console.log(phone)
		if(phone == ""){
			this.setState({
				emptyPhone:true
			}) 		
		}
		if(!phone==""){
			this.setState({
				emptyPhone:false
			}) 
		}
		if(phone == "15308065492" && pws == "123"){
		   browserHistory.push('/mine');
		    localStorage.setItem("loginInfo",JSON.stringify({
                    name:"daiyu"
                }))
//			alert("哈哈")
			
		}
		
	
	}
	hand(){
		this.setState({
			 open:!this.state.open
		})
		var pws = document.getElementById("pws")
		if(pws.type=="password"){
			pws.type = "text"
		}else if (pws.type=="text"){
			pws.type = "password"
		}
	}
}
export default Login