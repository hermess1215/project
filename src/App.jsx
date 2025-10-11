import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import StudentHome from './pages/StudentHome'
import TeacherHome from './pages/TeacherHome'
import AddAfter from './pages/AddAfter'
import Application from './pages/Application'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/StudentHome' element={ <StudentHome /> } />
          <Route path='/TeacherHome' element={ <TeacherHome /> } />
          <Route path='/AddAfter' element={ <AddAfter /> } />
          <Route path='/Application' element={ <Application /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
