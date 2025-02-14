import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

function BuggyComponent() {
  throw new Error("BUGGY COMPONENT");

  return <>OOOOOOOOOO</>;
}

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
      </ErrorBoundary>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
