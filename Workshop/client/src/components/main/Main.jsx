import SearchBar from "./search-bar/SearchBar";
import Table from "./table/Table";

export default function Main() {
  return (
    <>
      <main className="main">
        <section className="card users-container">
            <SearchBar />
            <Table />
        </section>
      </main>
    </>
  );
}
