import Card from "./Components/Card"
import OIP from "./assets/OIP.jpeg"
import krishna from "./assets/krishna.jpg"
import Shiva from "./assets/shiva.jpg"
function App() {
  return (
    <>
    <div className="container">
    <Card name = "Radha Rani" desc="Devotee of Lord Radha" image={OIP} style={{"border-radius": "10px" }} />
    <Card name = "Krishna ji" desc="Devotee of Lord Krishna" image={krishna} style={{"border-radius": "10px" }} />
    <Card name = "Shiva Shakti" desc="Devotee of Lord Shiva" image={Shiva} style={{"border-radius": "10px" }} />

    </div>
    </>
  )
}

export default App
