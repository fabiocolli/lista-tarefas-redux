import { Link } from "react-router-dom";

export const NavBar = () => {
  const navContent = (
    <div className="navContent">
      <div className="navLinks">
        <Link to="/" className="button small">
          Lista de Tarefas
        </Link>
      </div>
    </div>
  );

  return (
    <nav>
      <section>
        <h1>Lista de Tarefas com Redux</h1>
        {navContent}
      </section>
    </nav>
  );
};
