import { Link } from "react-router-dom"
import StudentLogin from "../components/Login/StudentLogin"
import TeacherLogin from "../components/Login/TeacherLogin"
import styles from '../components/Login/Login.module.css'

const Login = () => {
    return(
        <>  
            <div className={styles.box}>
                <Link to='/StudentHome'><StudentLogin /></Link>
                <Link to='/TeacherHome'><TeacherLogin /></Link>
            </div>
        </>
    )
}

export default Login