import reactLogo from "../assets/react.svg"
import viteLogo from "../../public/vite.svg"
import MIULogo from "../assets/MIU_logo.png"
import '../App.css'

import { useNavigate } from "react-router-dom"

const Home: React.FC = () => {
    const navigate = useNavigate()

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
            <h1>MIU Team 7 Prototype</h1>
            <div className="card">
                <button onClick={() => navigate('/request-form')}>Submit a Request</button>
            </div>
            <div className="card">
                <button style={{ backgroundColor: "blue"}}>
                    <a style={{ color: "white"}} target="_blank" href="https://trello.com/b/dkWtG3Jf/miu-official-backlog">View MIU Official Backlog</a>
                </button>
            </div>
            <div className="card">
                <button style={{ backgroundColor: "purple"}}>
                    <a style={{ color: "white"}} target="_blank" href="https://trello.com/w/workspace42967713">View All Branch Kanban Boards</a>
                </button>
            </div>
            <p className="read-the-docs">Click on the logos to learn more</p>
        </>
    )
}

export default Home;

