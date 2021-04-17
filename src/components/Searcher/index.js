import "./style.css";

export default function Searcher() {
  return (
    <header className="layout-header">
      <form>
        <input placeholder="Nombre o Apellido" type="search" maxLength={45} />
      </form>
    </header>
  );
}
