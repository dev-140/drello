import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";
import "./style/style.css";

function App() {
    return (
        <div className='App'>
            <Nav></Nav>
            <HeroBanner></HeroBanner>
        </div>
    );
}

export default App;
