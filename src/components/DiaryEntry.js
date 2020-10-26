import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    // display: 'flex',
    marginBottom: 20,
  },
  content: {
    padding: 25,
    objectFit: 'cover',
  },
  image: {
    height: '100%',
    width: '50%',
    borderRadius: '6px',
    border: '2px solid black',
  },
};

class DiaryEntry extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      diaryEntry: {
        commentCount,
        createdAt,
        episodeNum,
        episodeThumbnail,
        episodeTitle,
        likeCount,
        posterPath,
        reviewScore,
        reviewText,
        seasonBackdrop,
        seasonNum,
        seriesBackdrop,
        seriesId,
        seriesTitle,
        userHandle,
        userImage,
      },
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              src={userImage}
              aria-label="User image"
              className={classes.avatar}
            ></Avatar>
          }
          title={
            <Typography
              variant="h5"
              component={Link}
              to={`/users/${userHandle}`}
              color="primary"
            >
              {userHandle}
            </Typography>
          }
          subheader={dayjs(createdAt).fromNow()}
        />
        <CardContent className={classes.details}>
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Typography variant="body1">{seriesTitle}</Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="body1">
                    Season {seasonNum} episode {episodeNum}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{episodeTitle}</Typography>
                </Grid>
              </Grid>
              <Rating
                name="half-rating-read"
                defaultValue={reviewScore / 2}
                precision={0.5}
                readOnly
              />
              <Typography variant="body1">{reviewText}</Typography>
            </Grid>
            <Grid item sm={8}>
              {/* <CardMedia
                image={posterPath}
                title="Series poster"
                className={classes.image}
                style={styles}
              /> */}
              <CardMedia
                image={episodeThumbnail}
                title="Episode image"
                className={classes.image}
                style={styles}
              />
              {/* <CardMedia
                image={seasonBackdrop}
                title="Season backdrop"
                className={classes.image}
                style={styles}
              />
              <CardMedia
                image={seriesBackdrop}
                title="Series backdrop"
                className={classes.image}
                style={styles}
              /> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(DiaryEntry);