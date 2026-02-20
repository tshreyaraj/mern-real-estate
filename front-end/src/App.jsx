import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/profile" element={<Profile/>}> </Route>
        <Route path="/signin" element={<SignIn/>}> </Route>
        <Route path="/signup" element={<SignUp/>}> </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
