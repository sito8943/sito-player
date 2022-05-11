// own components
import Container from "../../../components/Container/Container";
import SongListItem from "./SongListItem/SongListItem";

const Playlist = () => {
  const list = [
    { favorite: true, artistPhoto: "Sito", artist: "Sito", title: "Mi song" },
    { favorite: true, artistPhoto: "Sito", artist: "Sito", title: "Mi song" },
    { favorite: true, artistPhoto: "Sito", artist: "Sito", title: "Mi song" },
  ];
  return (
    <Container
      alignItems="center"
      flexDirection="column"
      sx={{ maxWidth: "700px" }}
    >
      {list.map((item, i) => (
        <SongListItem key={i} content={item} />
      ))}
    </Container>
  );
};

export default Playlist;
