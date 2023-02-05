import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div className="App col-9">
          <h1 className="text-center">React Calculator</h1>
          <Calculator></Calculator>
          <div id="author">
            <p class="text-center mt-3 mb-0">
              <a
                id="github-link"
                href="https://github.com/JoelEncinas"
                target="_blank"
                rel="noreferrer"
              >
                Made by Joel
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
