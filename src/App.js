import logo from "./logo.svg";
import "./App.css";
import Charts from "./client";
import RenderLineChart from "./housing-approval.component";

function App() {
  return (
    <div className="App">
      <Charts />
      <RenderLineChart />
    </div>
  );
}

export default App;
