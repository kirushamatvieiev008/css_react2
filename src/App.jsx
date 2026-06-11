import './App.css';
import games from "./games.json";
import { GamesList } from "./component/GamesList/GamesList";



function App() {

  return (
    <>
      <GamesList data={games}/>
    </>
  )
}

export default App
