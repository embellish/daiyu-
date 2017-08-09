import React ,{Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Search.css";
import $ from 'jquery';
import JobList from '../components/JobList';

class Search extends Component{
	constructor(){
		super();
		this.state={
			data:[],
			page:1
		}
		this.nationwide = this.nationwide.bind(this);
		this.sign = this.sign.bind(this);
		this.handul = this.handul.bind(this);
		this.searchh = this.searchh.bind(this);
	}
	render(){
		let _data=this.state.data;
		let list=_data.map(function(ele){
			return <JobList job={ele} key={ele.positionId}/>
		})
		
		
		
	 	return(
			<div>
					<div id="content">
						<div className="linputer">
							<div className="lbutton">
								<span className="city" onClick={this.nationwide}>全国</span>
								<span className="cityiocn"></span>
							</div>
							<div className="rinput">
								<input className="inputer" type="text" placeholder="搜索职位公司"/>
							 	<span className="search iconfont icon-sousuo" onClick={this.searchh}></span>
							</div>
							<div className="custominfo">
								将搜索地区和关键字设定定制条件
							</div>
							{list}

							
						</div>
						<div className="down">
							  <div className="head-left" onClick={this.sign}>&lt;</div>
							<div className="conten">
							  	<span>热门城市</span>
							  	<ul className="ul" onClick={this.handul}>
							  		<li>北京</li><li>上海</li><li>广州</li><li>深圳</li><li>成都</li>	<li>杭州</li>							 
							  	</ul>
							  	<span>ABCDEF</span>
							  	<ul className="ul" onClick={this.handul}>
							  		<li>保定</li><li>北京</li><li>包头</li><li>长春</li><li>成都</li>
							  		<li>重庆</li><li>长沙</li><li>常州</li><li>沧州</li><li>东莞</li>
							  		<li>大连</li><li>东营</li><li>德阳</li><li>佛山</li><li>保定</li>
							  		<li>福州</li>
							  	</ul>
							  	<span>GHIJ</span>
							  	<ul className="ul" onClick={this.handul}>
							  		<li>桂林</li><li>贵阳</li><li>广州</li><li>漳州</li><li>淮安</li>
							  		<li>重庆</li><li>哈尔滨</li><li>常州</li><li>沧州</li><li>东莞</li>
							  		<li>大连</li><li>东营</li><li>德阳</li><li>佛山</li><li>保定</li>
							  		<li>福州</li><li>福州</li><li>福州</li><li>福州</li><li>福州</li>
							  		<li>福州</li><li>福州</li>
							  	</ul>
							 </div>
					    </div>
						
					</div>
			</div>
		)
	 	
	}
	searchh(){
		var _this = this;
		var _val = $('.inputer').val();
		if(_val==""){
			alert("你是猪变的吗？空的你收的什么！ 我看你是要修仙！")
		}else{		 		
		let page=this.state.page+1;
		$('.custominfo').css("display","block");
		$.ajax({
			 url:'https://m.lagou.com/search.json?city='+"全国"+'&positionName='+_val+'&pageNo='+page+'&pageSize=15',
			 type:'GET',
			 dataType:'json',
			 success:function(data){
			 	_this.setState({
			 		data:_this.state.data.concat(data.content.data.page.result),
			 		page:page
			 	})
			 }
		});
	  }
		$('.Item_li').css("display","block")
	}
	nationwide(){
		document.querySelector('.down').style.display="block";
		document.querySelector('.linputer').style.display = "none";
		document.querySelector('.head-left').style.display = "block";
	}
	sign(){
		document.querySelector('.linputer').style.display = "block";
		document.querySelector('.down').style.display="none";
	}
	handul(e){			
	   var Html = e.target.innerHTML	
		 document.querySelector('.city').innerHTML = Html;
//   	 document.querySelector('.conten').style.display="none";
//   	 document.querySelector('.linputer').style.display = "block";
		
	}

}
export default Search;
