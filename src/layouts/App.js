import { Link } from 'react-router-dom';
import '../styles/App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          DEEP_BG_MUSIC
        </p>
        <Link to="/practice">Go Practice</Link>
      </header>
    </div>
  );
}
export default App;
