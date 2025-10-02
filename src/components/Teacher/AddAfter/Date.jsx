import styles from './Date.module.css'

const Date = () => {
    return (
        <>
            <div className={styles.date}>
                <div className={styles.text}>
                    방과후 날짜 선택
                </div>
                <form action="" className={styles.selector}>
                    <input type="checkbox" name="weekday" id="mon" value="월" />
                    <label htmlFor="mon">월</label>

                    <input type="checkbox" name="weekday" id="tue" value="화" />
                    <label htmlFor="tue">화</label>

                    <input type="checkbox" name="weekday" id="wed" value="수" />
                    <label htmlFor="wed">수</label>

                    <input type="checkbox" name="weekday" id="thu" value="목" />
                    <label htmlFor="thu">목</label>

                    <input type="checkbox" name="weekday" id="fri" value="금" />
                    <label htmlFor="fri">금</label>
                </form>
            </div>
        </>
    )
}

export default Date