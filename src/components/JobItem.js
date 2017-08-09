import React ,{Component} from 'react';
import JobList from './JobList';
import "./JobItem.css";
import $ from 'jquery';
class JobItem extends Component{
	constructor(){
		super();
		this.state={
			data:[],
			page:2
		}
		this.getMoreJob = this.getMoreJob.bind(this)
	}
	render(){
		var _data = this.props.data.concat(this.state.data)
//		var ListData = this.state.data
//		console.log(ListData)
//		var a = this.props.page
//		console.log(a)
		var list = _data.map((ele)=>{
			return <JobList job={ele} key={ele.positionId}/>
		})
		return(
		
			<ul>
				{list}
				<li className="Item_li" onClick = {this.getMoreJob}>加载更多</li>
			</ul>			
		)
	}
	
//	https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
	getMoreJob(){
		var _this = this
		let page=this.state.page+1
		$.ajax({
			url:"https://m.lagou.com/listmore.json?pageNo="+page+"&pageSize=15",
			type:"GET",
			dataType:"json",
			success:function(data){
				_this.setState({
                    data:_this.state.data.concat(data.content.data.page.result),
                    page:page
                })
			}
		})
	}

}
export default JobItem;
