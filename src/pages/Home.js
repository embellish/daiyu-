import React ,{Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { browserHistory } from 'react-router';
import JobItem from '../components/JobItem';
import './Home.css';
import $ from 'jquery';
class Home extends Component{
	constructor(){
		super();
		this.state={
			data:[]
			
		}
		this.but = this.but.bind(this)
	}
	render(){
		
		return (	
			<div>
				 <div className="customization"> 	   		
			 	   		<span>10秒钟定制职位</span>	
			 	   		<a className="go" onClick={this.but}>去登录</a>		 	   	   
			 	  </div>
			 	 <JobItem data={this.state.data} page={this.state.page}/>
			 	  <div id="copyright"><p>©2015 lagou.com, all right reserved </p>
                        <div className="copyright-item">
                            <span className="phone active">移动版&nbsp;·&nbsp;</span>
                            <span className="computer">电脑版&nbsp;·&nbsp;</span>
                            <a href="#Header">回顶部</a>
                        </div>
                        
                    </div>
			</div>
			
		)
	}
	componentWillMount(){
		var _this=this;
		$.ajax({
			url:"https://m.lagou.com/listmore.json?",
			data:"page="+ 1 +"&pageSize=15",
			type:"GET",
			dataType:"json",
			success:function(data){
				_this.setState({
					data:_this.state.data.concat(data.content.data.page.result)
				})
			}
		})
	}
	but(){
	  browserHistory.push('/login');
	}
}

export default Home;