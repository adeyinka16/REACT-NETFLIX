import "./App.css";
import Banner from "./components/Banner";
import EnjoyTv from "./components/EnjoyTv";
import Mobile from "./components/Mobile";
import Netflix from "./components/Netflix";

function App() {
  document.title = "Netflix";
  return (
    <section>
      <Netflix/>
      {/* <Banner />
      <EnjoyTv />
      <Mobile/> */}
    </section>
  );
}

export default App;
