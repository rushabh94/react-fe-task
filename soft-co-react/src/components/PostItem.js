import React from "react";
import { useDispatch } from "react-redux";
import {
  likePost,
  addComment,
  repost,
  savePost,
  unsavePost,
} from "../redux/slices/postSlice";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardHeader,
  Avatar,
} from "@mui/material";
const PostItem = ({ post, postId }) => {
  const dispatch = useDispatch();

  const handleLike = (postId) => {
    dispatch(likePost(postId));
  };

  const handleComment = (postId, comment) => {
    dispatch(addComment(postId, comment));
  };

  const handleRepost = (postId) => {
    dispatch(repost(postId));
  };

  const handleSave = (postId) => {
    dispatch(savePost(postId));
  };

  const handleUnsave = (postId) => {
    dispatch(unsavePost(postId));
  };

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar>{post.title.charAt(0)}</Avatar>}
        title={post.title}
        subheader={`Posted by User`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.description}
        </Typography>
        {post.image && (
          <img
            src={URL.createObjectURL(post.image)}
            alt="Uploaded"
            style={{ width: "100px" }}
          />
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleLike(post.id)}>
          Like
        </Button>
        <Button
          size="small"
          onClick={() => handleComment(post.id, "New comment")}>
          Comment
        </Button>
        <Button size="small" onClick={() => handleRepost(post.id)}>
          Repost
        </Button>
        <Button size="small" onClick={() => handleSave(post.id)}>
          Save
        </Button>
        <Button size="small" onClick={() => handleUnsave(post.id)}>
          Unsave
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Likes: {post.likes}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Comments: {post.comments?.length}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Saved: {post.isSaved ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;
