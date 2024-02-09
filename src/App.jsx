import React from 'react';
import './App.css';

function App() {

    const [light, toggleLight] = React.useState(false)
    console.log(light)


    return (
        <main className={light ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button 
                    type="button"
                    onClick={light ? () => toggleLight(false) : () => toggleLight(true)}
                >
                    {light? "Turn off" : "Turn on"}
                </button>
            </section>
        </main>
    );
}

export default App;
