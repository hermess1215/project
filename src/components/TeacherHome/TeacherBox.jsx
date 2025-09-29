import { Link } from 'react-router-dom'
import styles from './TeacherBox.module.css'

const TeacherBox = () => {
    return(
        <>
            <div className={styles.container}>
                <Link to='/AddAfter'><div className={styles.menuBox}>방과후 등록</div></Link>
                <div className={styles.menuBox}>방과후 공지</div>
                <div className={styles.menuBox}>방과후 수정∙삭제</div>
            </div>
        </>
    )
}

export default TeacherBox