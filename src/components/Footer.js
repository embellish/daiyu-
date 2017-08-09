import React ,{Component} from 'react';
import './Footer.css';
import {Link,IndexLink} from 'react-router';
class Footer extends Component{
	constructor(){
		super();
		this.state={
		}
		this.custom = this.custom.bind(this);
		this.seek = this.seek.bind(this);
		this.mine =this.mine.bind(this);
	}
	render(){
		return (
			 <div id="Footer"> 
			    <IndexLink to="/" activeClassName = "selected">
			 	 	<div className="post postnoe" onClick={this.custom}>
			 	 		<i className="iconfont icon-iconfontshouye1"></i>
			 	 		<span className="text">职位</span>
			 	 	</div>
			 	</IndexLink>
			 	<Link to="/search" activeClassName = "selected">
			 	 	<div className="post" onClick={this.seek}>
			 	 		 <i className="iconfont icon-sousuo"></i>
			 	 		 <span>搜索</span>
			 	 	</div>
			 	</Link>	
			 	<Link to="/mine" activeClassName = "selected">
				 	 	<div className="post" onClick={this.mine}>
				 	 		  <i className="iconfont icon-wode"></i>
				 	 		  <span>我的</span>
				 	 	</div>
			 	</Link>
			 </div>
		)
	}
	custom(){
	
	}	
	seek(){
		console.log(1)
	}
	mine(){
		console.log(1)
	}
}

export default Footer;