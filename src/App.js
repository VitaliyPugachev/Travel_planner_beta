import Header from './components/header/header';
import Container from './components/container/container';
import './App.css';
import AddPanel from './components/add-panel/add-panel';

function App() {
  return (
    <div className="App">
        <Header/>
        <Container/>
        <AddPanel/>
    </div>
  );
}

export default App;
