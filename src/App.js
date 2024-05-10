import Basket from "./components/Basket";
import BulletinTable from "./components/BulletinTable";
import { GlobalProvider } from "./Contexts/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BulletinTable />
      <Basket />
    </GlobalProvider>
  );
}

export default App;
