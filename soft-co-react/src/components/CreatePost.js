import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Typography, Container } from "@mui/material";
import { addPost } from "../redux/slices/postSlice";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    id: "",
    likes: 0,
    comments: 0,
  });

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(7);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postId = generateUniqueId();
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageUrl = reader.result;
      const postData = { ...formData, id: postId, imageUrl };
      dispatch(addPost(postData));
      setFormData({
        title: "",
        description: "",
        imageFile: null,
      });
    };

    if (formData.image) {
      reader.readAsDataURL(formData.image);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Create a Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          name="title"
          value={formData.title}
          onChange={handleChange}
          label="Title"
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          name="description"
          value={formData.description}
          onChange={handleChange}
          label="Description"
          multiline
          rows={4}
        />
        <input
          accept="image/*"
          type="file"
          id="upload-file"
          onChange={handleFileChange}
        />
        {formData.image && (
          <img
            src={URL.createObjectURL(formData.image)}
            alt="Uploaded"
            style={{ width: "100px" }}
          />
        )}
        <Button type="submit" variant="contained" color="primary">
          Post
        </Button>
      </form>
    </Container>
  );
};

export default CreatePost;
