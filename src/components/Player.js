import { start, soundFontPlayerStart, stop, soundFontPlayerStop } from '../hooks/usePlayer.js';
import '../styles/App.css';

function Player() {
    return (
        <div className="App">
            <p>
                Player Practice
            </p>
            <div>
                <button onClick={()=>start()}>
                    Start
                </button>
                <button onClick={()=> soundFontPlayerStart()}>
                    SoundFontPlayerStart
                </button>
            </div>
            <div>
                <button onClick={()=> stop()}>
                    Stop
                </button>
                <button onClick={()=> soundFontPlayerStop()}>
                    soundFontPlayerStop
                </button>
            </div>
        </div>
    );
}
export default Player;