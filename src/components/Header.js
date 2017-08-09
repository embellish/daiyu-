import React ,{Component} from 'react';
import './Header.css';
class Header extends Component{
	constructor(){
		super();
		this.state={
			title:''
		}
	}
	render(){
		return (
			 <div id="Header"> 
			 	   {this.props.title}
			 	  
			 </div>
		)
	}
}

export default Header;
