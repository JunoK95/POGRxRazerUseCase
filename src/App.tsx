import "./App.css";

function App() {
  return (
    <div>
      <h1>Welcome to the POGR Razer Use Case</h1>
      <p>This is a demonstration of the POGR Razer use case.</p>
      <nav style={{ margin: "20px 0" }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "16px",
          }}
        >
          <li>
            <a
              href="/case-one"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#44d62c",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Case One
            </a>
          </li>
          <li>
            <a
              href="/case-two"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#44d62c",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Case Two
            </a>
          </li>
          <li>
            <a
              href="/case-three"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#44d62c",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Case Three
            </a>
          </li>
        </ul>
      </nav>
      <footer>
        <p>&copy; 2023 POGR Razer Use Case</p>
      </footer>
    </div>
  );
}

export default App;
