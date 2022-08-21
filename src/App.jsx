import logo from "./logo.svg";
import "./App.css";
import Footers from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footers />
    </>
  );
};

export default App;
