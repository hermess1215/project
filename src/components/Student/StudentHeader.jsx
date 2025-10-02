import styles from './StudentHeader.module.css'

const StudentHeader = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.text}>Student</div>
                <div className={styles.user}></div>
            </header>
        </>
    )
}

export default StudentHeader