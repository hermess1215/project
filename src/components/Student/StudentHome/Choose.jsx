import styles from './Choose.module.css'
import { Link } from "react-router-dom"

const Choose = () => {
    return (
        <>
            <Link to='/Application'><div className={styles.choose}>방과후 신청</div></Link>
        </>
    )
}

export default Choose