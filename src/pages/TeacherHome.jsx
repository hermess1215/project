import TeacherHeader from "../components/Teacher/TeacherHeader"
import TeacherBox from "../components/Teacher/TeacherHome/TeacherBox"
import Subject from "../components/Teacher/TeacherHome/Subject"
import MyAfter from "../components/Teacher/TeacherHome/MyAfter"

const TeacherHome = () => {
    return(
        <>
            <TeacherHeader />
            <TeacherBox />
            <Subject />
            <MyAfter />
        </>
    )
}

export default TeacherHome