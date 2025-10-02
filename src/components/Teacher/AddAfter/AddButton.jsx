import styles from './AddButton.module.css'

const AddButton = () => {
    return(
        <>
            <div className={styles.box}>
                <button type='submit' className={styles.button}>등록</button>
            </div>
        </>
    )
}

export default AddButton