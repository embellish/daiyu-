import React ,{Component} from 'react';
import './Register.css';
import $ from 'jquery';
class Register extends Component{
	constructor(){
		super();
		this.state={
			open:false
		}
		this.hand = this.hand.bind(this)
		this.butn = this.butn.bind(this)
		this.goRegister = this.goRegister.bind(this)
		this.regbtn = this.regbtn.bind(this)
	}
	render(){
		return(
			<div id="all">
				 <div className="new_wrapper">
				 	  <form id="registerForm">
				 	  		<div className="regphone">
				 	  			 <input type="text" placeholder="手机号" className="phone1"/>
				 	  		</div>
				 	  		<div className="vcode">
				 	  			 <input type="text" placeholder="证明你不是机器人" className="phone1 vcode1"/>
				                 <img  className="code" src={"https://passport.lagou.com/vcode/create?from=register&refresh=1500348854260"}/>
				                 <a className="code_a">
				                 	看不清楚, 
				                 	<em>
				                 		换一张
				                 	</em>
				                 </a>
				 	  		</div>
				 	  		<div className="regpws">
				 	  			 <input type="text" placeholder="短信验证码" className="phone1 vcode2"/>
				 	  			 <input type="button" value="获取" className="butt"/>
				 	  		</div>
				 	  		<div className="pass">
				 	  			<input type="password" placeholder="设置1-16位的密码" className="phone1 pws"/>
								<i className={this.state.open?"open":"eye"} onClick={this.hand}></i>
				 	  		</div>
				 	  		<div>
				 	  			 <span className="register1" onClick={this.goRegister}>注册</span>
				 	  			 <b className="Id">已有账号?</b>
				 	  		</div>
				 	  		<div>
				 	  			<span className="register2" onClick={this.regbtn}>登录</span>
				 	  			<span className="deal">点击注册,即代表您同意 《拉钩用户协议》</span>
				 	  		</div>
				 	  </form>
				 </div>
			</div>	
		)
	}
	hand(){
	 this.setState({
		  open:!this.state.open
		})
	}
	butn(){
		
	}
	goRegister(){
		var _text = $('.phone1').val();
		var _psw = $('.pws').val();
		if(_text.length == ""){
			alert("大哥空的呀!你注册什么,您这是要修仙吗?")
		}
		localStorage.setItem("register",JSON.stringify({name:_text}))
		localStorage.setItem("register",JSON.stringify({name:_psw}));
	}
	regbtn(){
		
	}
	
}
export default Register;
