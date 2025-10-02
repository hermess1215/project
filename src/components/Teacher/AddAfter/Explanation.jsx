import styles from './Explanation.module.css'

const Explanation = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>방과후 설명:</div>
                <div className={styles.input}>
                    <input type="text" className={styles.explanation} />
                </div>
            </div>
        </>
    )
}

export default Explanation