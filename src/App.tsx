import "./App.css";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="appContainer">
      <SearchBar />
      <UserList />
    </div>
  );
}

export default App;
