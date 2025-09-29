import styles from './Subject.module.css'

const Subject = () => {
    return(
        <>
            <select name="subject" className={styles.select} defaultValue="">
                <option value="" className={styles.subject} disabled hidden>과목</option>
                <option value="1" className={styles.subject}>수학</option>
                <option value="2" className={styles.subject}>영어</option>
            </select>
        </>
    )
}

export default Subject