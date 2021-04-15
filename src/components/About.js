import {Link} from  'react-router-dom'

const About = () => {
    return(
        <div>
            <h4>Made after Traversy Media's React JS Crash Course</h4>
            <br/>
            <li>
                Mock Server - JSON Server
            </li>
            <br/>
            <Link to="/">Go Back</Link>
        </div>
    )
}
export default About