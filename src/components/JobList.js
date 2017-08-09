import React ,{Component} from 'react';
import './JobList.css';
class JobList extends Component{
	constructor(){
		super();
	}
	render(){
		let job = this.props.job
//		console.log(job)
		let src="//www.lgstatic.com/"+job.companyLogo
		return(
			<li className="List_li">
				<img src={src} className="list_img"/>
				<div className="list_div">
					<h2 className="list_h2">{job.companyName}</h2>
					<span className="positionName">{job.positionName} [{job.city}]</span>
					<span className="salary">{job.salary}</span>
					<p className="list_p">{job.createTime}</p>					
				</div>
				
			</li>
		
                  
		)
	}
}
export default JobList;