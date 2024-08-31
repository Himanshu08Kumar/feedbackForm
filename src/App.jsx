import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import {CounterProvider} from './context/CounterContext' 


function App() {
 
  return (
    <>
    <CounterProvider>
      <Navbar />
      <Form />
    </CounterProvider>
    </>
  );
}

export default App;
