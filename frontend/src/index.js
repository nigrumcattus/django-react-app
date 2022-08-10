import React,{useState} from "react"
import ReactDOM from "react-dom"

import axiosInstance from "./axiosApi";

const MyReactApp = () => {
	const [val,setVal] = useState({});

	const get_test = async () => {
		let url='/Api/test/';
		await axiosInstance.get(url).then(response => {
			setVal(response.data);
		}).catch(error=>{
		});
	}
	return (<>
		<h1>MyReactApp</h1>
		<button onClick={()=>{get_test()}}>button</button>
		<div>{JSON.stringify(val)}</div>
	</>);

}

ReactDOM.render(<MyReactApp />, document.getElementById('root'))
