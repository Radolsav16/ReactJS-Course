import Header from "./components/header/Headers"
import Footer from "./components/footer/Footer"
import Search from "./components/section/search/Search"
import Table from "./components/section/table/Table"
import NewUserBtn from "./components/newUserBtn/NewUserBtn"
import Pagination from "./components/section/pagination/Pagination"
import UserDetail from "./components/section/userDetail/UserDetail"
import ErrorComponent from "./components/error/Error"
function App() {


  return (
    <>
     <Header />
    <main className="main">
    <section className="card users-container">
      <Search />
      <Table />
      <NewUserBtn />
      <Pagination />
      {/* < UserDetail /> */}
      {/* <ErrorComponent /> */}

    </section>
    </main>
     <Footer />

    </>
  )
}

export default App
