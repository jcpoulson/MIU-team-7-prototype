import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../custom.css"

import reactLogo from "../assets/react.svg"
import viteLogo from "../../public/vite.svg"
import MIULogo from "../assets/MIU_logo.png"
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'

import config from "../siteConfig"
import needsReviewListForBranchs from "../initialBranchData"


const Form = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedBranch, setSelectedBranch] = useState('')
	const [branch, setBranch] = useState('');


	async function handleSubmit() {
		const myHeaders = new Headers();
		myHeaders.append("Accept", "application/json");
		myHeaders.append("Cookie", "dsc=6fe2c0b5f4cfcc49af6a6e47186b469eefbe960198d5e0cbe44f51c57fd6a553");

		const desc = `Ticket submitted by: ${name}%0A%0A${description}`
		

		fetch(`https://api.trello.com/1/cards?key=${config.APIKey}&token=${config.token}&idList=${branch}&name=${title}&desc=${desc}`, {
			method: 'POST',
			headers: myHeaders,
			redirect: 'follow'
		})
			.then(response => response.text())
			.then(() => navigate(`/complete/${selectedBranch.replace(/\s+/g, "")}`))
			.catch(error => {
				alert(error.message)
				console.log('error', error)
			});
	}


	return (
		<>
			<div>
				<a href="https://github.com/jcpoulson/MIU-team-7-prototype" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://www.marforres.marines.mil/MIU/" target="_blank">
					<img src={MIULogo} className="mainLogo" alt="MIU logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Request Form</h1>
			<div className="form">
				<TextField sx={{ marginBottom: "30px"}} className="formField" label="Input your Name" value={name} onChange={(event) => setName(event.target.value)} />
				<TextField sx={{ marginBottom: "30px"}} className="formField" label="Request Title" value={title} onChange={(event) => setTitle(event.target.value)} />
				<TextField sx={{ marginBottom: "30px"}} className="formField" label="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
				<FormControl fullWidth sx={{ marginBottom: "30px"}} className="formField">
					<InputLabel id="demo-simple-select-label">Branch</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Branch"
						sx={{ textAlign: "left" }}
						value={branch}
						onChange={event => {
							const findSelectedBranch = needsReviewListForBranchs.find(item => item.listID === event.target.value);
							if (findSelectedBranch === undefined) {
								setSelectedBranch("Undefined")
							} else {
								setSelectedBranch(findSelectedBranch.name)
							} 
							setBranch(event.target.value)
						}}
					>
						{
							needsReviewListForBranchs.map(item => (
								<MenuItem key={item.listID} value={item.listID}>{item.name}</MenuItem>
							))
						}
					</Select>
				</FormControl>
			</div>
			<Button variant="contained" onClick={handleSubmit}>Submit</Button>
			<button onClick={() => navigate('/')}>Cancel</button>
		</>
	)
}

export default Form