const App = () => {
    return (

        <div className="container">
            <div>
                <h1>25 + 5 Clock</h1>
                <div className="break-session-length">
                    <div>
                        <h2 id="break-label">Break Length</h2>
                        <div>
                            <button disabled={play} onClick={handleBreakIncrease} id="break-increment">Increase</button>
                            <span id="break-length">{breakLength}</span>
                            <button disabled={play} onClick={handleBreakDecrease} id="break-decrement">Decrease</button>
                        </div>
                    </div>
                    <div>
                        <h2 id="session-label">Session Length</h2>
                        <div>
                            <button disabled={play} onClick={handleSessionIncrease} id="session-increment">Increase</button>
                            <span id="break-length">{breakLength}</span>
                            <button disabled={play} onClick={handleSessionDecrease} id="session-decrement">Decrease</button>
                        </div>
                    </div>
                </div>
                <div className="timer-container">
                    <div className="timer">
                        <h2 id="timer-label">{title}</h2>
                        <h3 id="time-left">{timeFormatter()}</h3>
                    </div>
                    <button onClick={handlePlay} id="start-stop">Start/Stop</button>
                    <button onClick={handleReset} id="reset">Reset</button>
                </div>
            </div>
            <audio
                id="beep"
                preload="auto"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
            <div id="author">
                <p class="text-center mt-3 mb-0">
                    <a
                        id="github-link"
                        href="https://github.com/JoelEncinas"
                        target="_blank"
                    >Made by Joel</a
                    >
                </p>
            </div>
        </div>

    )
}