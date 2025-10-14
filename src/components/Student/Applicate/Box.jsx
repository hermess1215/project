import { Link } from "react-router-dom"
import styles from './Box.module.css'

const Box = () => {
    return (
        <>
            <div className={styles.box}>
                <div className={styles.apply}>신청하기</div>
                <Link to='/StudentHome'><div className={styles.back}>돌아가기</div></Link>
            </div>
        </>
    )
}

export default Box