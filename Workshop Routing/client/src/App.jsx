import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Routes , Route } from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {

  return (
    <div id="box">
      <Header />
        <main id="main-content">
          {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes> */}

        </main>
    </div>
  )
}

export default App