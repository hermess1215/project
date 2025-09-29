import TeacherHeader from "../components/TeacherHeader"
import TeacherBox from "../components/TeacherHome/TeacherBox"
import Subject from "../components/TeacherHome/Subject"
import MyAfter from "../components/TeacherHome/MyAfter"

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