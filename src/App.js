import HeroBanner from "./components/HeroBanner";
import Main from "./components/Main";
import Nav from "./components/Nav";
import About from "./components/About";
import "./style/style.css";
import Contact from "./components/Contact";

function App() {
    return (
        <div className='App'>
            <Nav></Nav>
            <HeroBanner></HeroBanner>
            <Main></Main>
            <About></About>
            <Contact></Contact>
        </div>
    );
}

export default App;
