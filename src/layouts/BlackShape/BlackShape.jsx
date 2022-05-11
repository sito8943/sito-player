// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

const BlackShape = (props) => {
  const { sx } = props;

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 1,
        width: "100vw",
        height: "100vh",
        background: "#2223338a",
        ...sx,
      }}
    />
  );
};

BlackShape.defaultProps = {
  sx: {},
};

BlackShape.propTypes = {
  sx: PropTypes.object,
};

export default BlackShape;
