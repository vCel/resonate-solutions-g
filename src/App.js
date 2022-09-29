import "./stylesheet/App.css";
import Listing from "./components/listing";

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <div className="content-container">
          <h1>Contacts</h1>
          <div className="seperator"/>
          <Listing />
          <div className="seperator"/>
        </div>
      </div>
    </div>
  );
}

export default App;
