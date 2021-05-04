import "./style.css";

export default function Card() {
  return (
    <div className="card">
      <header className="card-header">
        <h2>RICK SANCHEZ</h2>
      </header>
      <main className="card-main">
        <div className="avatar"></div>
        <div className="attributes">
          <div className="item">Ficha</div>
          <div className="item">Eliminar</div>
        </div>
      </main>
    </div>
  );
}
