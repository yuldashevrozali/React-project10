
import "./App.css";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <div className="Container">
        <Sidebar></Sidebar>
        <Container></Container>
      </div>
    </>
  );
}

export default App;
