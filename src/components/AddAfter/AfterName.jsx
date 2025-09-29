import styles from './AfterName.module.css'

const AfterName = () => {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.text}>방과후 이름:</div>
                <div className={styles.input}>
                    <input type="text" className={styles.name} />
                </div>
            </div>
        </>
    )
}

export default AfterName