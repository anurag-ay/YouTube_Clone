import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Sidebar />
        <Videos />
      </div>
    </>
  );
}

export default App;
