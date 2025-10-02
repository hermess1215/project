import styles from './Person.module.css'

const Person = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>방과후 설명:</div>
                <div className={styles.input}>
                    <input type="text" className={styles.person} />
                </div>
            </div>
        </>
    )
}

export default Person