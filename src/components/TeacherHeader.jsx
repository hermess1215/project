import styles from './TeacherHeader.module.css'

const TeacherHeader = () => {
    return(
        <>
            <header className={styles.header}>
                <div className={styles.text}>Teacher</div>
                <div className={styles.user}></div>
            </header>
        </>
    )
}

export default TeacherHeader