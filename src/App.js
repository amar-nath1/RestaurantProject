import Header from './components/Layout/Header'
import { Meals } from './components/Meals/Meals';
import CartModal from './components/Cart/CartModal';


function App() {
  return (
    <>
    <Header></Header>

    <Meals></Meals>

    <CartModal></CartModal>
    </>
  );
}

export default App;
