import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
<<<<<<< Updated upstream

const RocketCard = ({ title, data }) => (
  <div className="w-full h-full lg:w-1/3 sm:w-1/2 ">
    <div className="m-8 p-8 shadow-2xl dark:light-shadow-2xl transition-shadow rounded-3xl">
      <h1 className="text-6xl font-semibold mb-8 text-gray-800 dark:text-white">
        {title}
      </h1>
      <ul>
        {data.map((rocket) => (
          <Link href={`/rockets/${rocket.slug}`} key={rocket.id} passHref>
            <li className="text-3xl p-2 text-gray-500 dark:hover:text-gray-300 hover:text-gray-800 hover:font-bold cursor-pointer">
              {rocket.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
=======
import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Button, IconButton, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import { green } from "@mui/material/colors/index";

const RocketCard = ({ rocket, parentLink }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      // background: green[200],
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
>>>>>>> Stashed changes
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
