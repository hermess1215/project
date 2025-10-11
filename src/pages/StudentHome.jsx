import StudentHeader from "../components/Student/StudentHeader"
import Calendar from "../components/Student/StudentHome/Calendar"
import Choose from "../components/Student/StudentHome/Choose"

const StudentHome = () => {
    return(
        <>
            <StudentHeader />
            <Calendar />
            <Choose />
        </>
    )
}

export default StudentHome