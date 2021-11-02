import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Button } from "@mui/material";

export default function ClusterCard({ cluster }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia>
        <Image
          width="1280"
          height="720"
          objectFit="cover"
          src={cluster.cover?.url || "https://via.placeholder.com/1280x720"}
          alt="lol"
        />
      </CardMedia>

      <CardHeader
        action={
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        }
        disableTypography
        title={<Typography variant="h5">{cluster.title}</Typography>}
      />
      <CardContent>
        <Typography variant="body2" noWrap color="text.secondary">
          {cluster.summary || null}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <NextLink href={`/clusters/${cluster.slug}`} passHref>
          <Button
            color="success"
            sx={{ boxShadow: 0 }}
            variant="contained"
            fullWidth
          >
            Start
          </Button>
        </NextLink>
        <IconButton size="small" aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
