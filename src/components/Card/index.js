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
          <div className="item">Human</div>
          <div className="item">Male</div>
        </div>
      </main>
    </div>
  );
}
