import TeacherHeader from "../components/Teacher/TeacherHeader"
import AfterName from "../components/Teacher/AddAfter/AfterName"
import Date from "../components/Teacher/AddAfter/Date"
import Explanation from "../components/Teacher/AddAfter/Explanation"
import Person from "../components/Teacher/AddAfter/Person"
import AddButton from "../components/Teacher/AddAfter/AddButton"

const AddAfter = () => {
    return(
        <>
            <TeacherHeader />
            <AfterName />
            <Date />
            <Explanation />
            <Person />
            <AddButton />
        </>
    )
}

export default AddAfter