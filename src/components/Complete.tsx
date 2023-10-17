import reactLogo from "../assets/react.svg"
import viteLogo from "../../public/vite.svg"
import MIULogo from "../assets/MIU_logo.png"
import '../App.css'

import { useNavigate, useParams } from "react-router-dom"
import needsReviewListForBranchs from "../initialBranchData"

const Complete: React.FC = () => {
    const navigate = useNavigate();
    const { branch } = useParams();

    const branchName = branch?.replace(/([A-Z])/g, ' $1').trim()
    
    const branchObject = needsReviewListForBranchs.find(branch => branch.name === branchName);

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
            <h1>Request Successfully Submitted</h1>
            <div className="card">
                <button onClick={() => navigate('/')}>Return Home</button>
            </div>
            <div className="card">
                <button><a target="_blank" href={branchObject?.link}>View {branchName} Kanban Board</a></button>
            </div>
        </>
    )
}

export default Complete;