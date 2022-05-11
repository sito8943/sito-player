// prop types
import PropTypes from "prop-types";

// own components
import Container from "../../../../components/Container/Container";

// @mui components
import { Divider, Typography, Box } from "@mui/material";

// @mui icons
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const SongListItem = (props) => {
  const { content } = props;

  return (
    <Container flexDirection="column" sx={{ margin: "10px", width: "100%" }}>
      <Container>
        {content.favorite ? <StarIcon /> : <StarBorderIcon />}
        <Box sx={{ margin: "0 20px" }}>
          <img src={content.artistPhoto} alt={content.artist} />
        </Box>

        <Container sx={{ width: "100%" }}>
          <Typography variant="body1" sx={{ marginRight: "20px" }}>
            {content.artist}
          </Typography>
          <Typography variant="body1">{content.title}</Typography>
        </Container>
      </Container>
      <Divider sx={{ marginTop: "10px" }} />
    </Container>
  );
};

SongListItem.propTypes = {
  content: PropTypes.object,
};

export default SongListItem;
