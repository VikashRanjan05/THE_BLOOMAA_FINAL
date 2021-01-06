import React  from 'react'
import { Link } from 'react-router-dom';

const MainAdmin = () => {

    
    return (
        <div>
            <h2>Hello this is main admin page</h2><br /><br />
            <Link style={{marginTop : '20px', textAlign : 'center'}} to="/Blooma/fndbysubdate"> Find Consumers By Subcription Date</Link> <br /><br />
            <Link style={{marginTop : '20px', textAlign : 'center'}} to="/Blooma/fndbyexpdate"> Find Consumers By Expiry Date</Link><br /><br />
            <Link style={{marginTop : '20px', textAlign : 'center'}} to="/Blooma/fndbynumber"> Find Consumers By Number</Link><br /><br />
            <Link style={{marginTop : '20px', textAlign : 'center'}} to="/Blooma/PlanActivation"> Find Consumers By Plan Activation</Link><br /><br />
            <Link style={{marginTop : '20px', textAlign : 'center'}} to="/Blooma/PlanDeActivation"> Find Consumers By Plan Deactivation</Link><br /><br />
        </div>
    )
}

export default MainAdmin
