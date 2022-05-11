import { useState } from "react";

// @emotion/css
import { css } from "@emotion/css";

// images
import logo from "../../assets/images/logo.svg";

// own components
import Container from "../../components/Container/Container";

// @mui icons
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// @mui components
import { Box, IconButton } from "@mui/material";

// layouts
import BlackShape from "../BlackShape/BlackShape";

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

  const play = () => {};

  const imageCover = css({
    width: "400px",
    height: "400px",
    position: "absolute",
  });

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100vw",
        height: "90vh",
        backgroundPosition: "center !important",
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "cover !important",
        background: "#222222a8",
        backgroundImage: cover,
      }}
    >
      {cover !== "" && (
        <BlackShape
          sx={{
            width: "100vw",
            height: "90vh",
            backdropFilter: "blur(4px)",
            background: "#222333e5",
          }}
        />
      )}
      <Container justifyContent="space-around" sx={{ width: "100%" }}>
        <Container sx={{ zIndex: 4 }}>
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
            <IconButton
              color={cover === "" ? "secondary" : "primary"}
              size="large"
              onClick={play}
              sx={{ zIndex: 4 }}
            >
              <PlayCircleOutlineIcon
                sx={{ fontSize: cover === "" ? "57px" : "64px" }}
              />
            </IconButton>
            <BlackShape
              sx={{ borderRadius: "15px", width: "280px", height: "280px" }}
            />
            {cover === "" ? (
              <img className={`spin ${imageCover}`} src={logo} alt="logo" />
            ) : (
              <Box
                id="cover"
                sx={{
                  width: "280px",
                  height: "280px",
                  position: "absolute",
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
        </Container>
      </Container>
    </Container>
  );
};

export default Player;
