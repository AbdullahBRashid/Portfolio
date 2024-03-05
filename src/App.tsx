import { Routes, Route, BrowserRouter } from "react-router-dom"

import Header from "./Layout/Header/Header"
import Footer from "./Layout/Footer/Footer"

import Home from "./Pages/Home/Home"
import Work from "./Pages/Work/Work"
import Contact from "./Pages/Contact/Contact"
import E404 from "./Pages/Errors/404"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route  element={<E404/>} />
            </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
