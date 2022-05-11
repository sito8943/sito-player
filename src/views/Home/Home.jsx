// own components
import Container from "../../components/Container/Container";

// layouts
import Playlist from "../../layouts/Playlist/Playlist";
import Player from "../../layouts/Player/Player";
import Login from "../../layouts/Login/Login";

const Home = () => {
  return (
    <Container>
      <Login />
      <Player />
      <Playlist />
    </Container>
  );
};

export default Home;
