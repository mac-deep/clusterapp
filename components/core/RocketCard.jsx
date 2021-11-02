import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Button, IconButton, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const RocketCard = ({ rocket, parentLink }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <CardHeader
      action={
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      }
      disableTypography
      title={<Typography variant="h5">{rocket.title}</Typography>}
    />

    <CardActions sx={{ justifyContent: "space-between" }}>
      <NextLink href={`/rockets/${rocket.slug}`} passHref>
        <Button
          color="success"
          sx={{ boxShadow: 0 }}
          variant="contained"
          fullWidth
        >
          Launch 🚀
        </Button>
      </NextLink>
      <IconButton size="small" aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
);

RocketCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

RocketCard.defaultProps = {
  title: "Rocket",
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default RocketCard;
