// components
import Box from "./components/Box";

// providers
import { PlayerProvider } from "./providers/PlayerProvider";

function App() {
  return (
    <PlayerProvider>
      <Box />
    </PlayerProvider>
  );
}

export default App;
