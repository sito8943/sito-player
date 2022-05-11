import { useState } from "react";

// @emotion/css
import { css } from "@emotion/css";

// images
import logo from "../../assets/images/logo.svg";

// own components
import Container from "../../components/Container/Container";

// @mui components
import { Box } from "@mui/material";

// audio lib
var jsmediatags = window.jsmediatags;

const Player = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("unknow");
  const [artist, setArtist] = useState("unknow");
  const [album, setAlbum] = useState("unknow");
  const [genre, setGenre] = useState("unknow");
  const handleInput = (e) => {
    const file = e.target.files[0];

    jsmediatags.read(file, {
      onSuccess: function (tag) {
        console.log(tag);
        // Array buffer to base64
        const data = tag.tags.picture.data;
        const format = tag.tags.picture.format;
        let base64String = "";
        for (let i = 0; i < data.length; i++) {
          base64String += String.fromCharCode(data[i]);
        }
        // Output media tags
        setCover(`url(data:${format};base64,${window.btoa(base64String)})`);

        setTitle(tag.tags.title);
        setArtist(tag.tags.artist);
        setAlbum(tag.tags.album);
        setGenre(tag.tags.genre);
      },
      onError: function (error) {
        console.log(error);
      },
    });
  };

  const imageCover = css({
    width: "100%",
    height: "100%",
  });

  return (
    <Container sx={{ zIndex: 2 }}>
      <Container
        sx={{
          width: "280px",
          height: "280px",
          background: "#222222a8",
          borderRadius: "15px",
        }}
        alignItems="center"
        justifyContent="center"
      >
        {cover === "" ? (
          <img className={`spin ${imageCover}`} src={logo} alt="logo" />
        ) : (
          <Box
            id="cover"
            sx={{
              width: "280px",
              height: "280px",
              backgroundPosition: "center !important",
              backgroundRepeat: "no-repeat !important",
              backgroundSize: "cover !important",
              background: "#222222a8",
              borderRadius: "15px",
              backgroundImage: cover,
            }}
          />
        )}
      </Container>

      <input
        type="file"
        id="input"
        accept=".mp3, .wav"
        onChange={handleInput}
      />
      <p>{title}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <p>{genre}</p>
    </Container>
  );
};

export default Player;
