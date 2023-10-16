import "./reset.css";
import "./App.css";
import Summary from "./Summary";
import Top from "./Top";

function App() {
  return (
    <div className="App">
      <main>
        <Top className="Top"/>
        <Summary />
      </main>
    </div>
  );
}

export default App;
