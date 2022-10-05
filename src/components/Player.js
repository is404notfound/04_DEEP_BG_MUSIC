import { start } from '../hooks/usePlayer.js';
import '../styles/App.css';

function Player() {
    function onStart() {
        start();
    };

    return (
        <div className="App">
            <p>
                Player Practice
            </p>
            <button onClick={onStart}>
                Start
            </button>
        </div>
    );
}
export default Player;