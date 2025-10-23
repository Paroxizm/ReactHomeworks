import './App.css'
import FactsPanel from "./components/FactsPanel/FactsPanel.jsx";


function App() {

    return (
        <div className="root-container">
            <div>
                <h3>Домашнее задание "КотоФакты"</h3>
            </div>

            <div className="facts-container">
                <div>
                    <FactsPanel url="https://catfact.ninja/facts" timeout={20000}/>
                </div>
                <div>
                    <FactsPanel url="https://catfact.ninja/facts" timeout={5000}/>
                </div>
            </div>
        </div>
    )
}

export default App
