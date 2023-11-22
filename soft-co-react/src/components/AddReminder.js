import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReminder } from "../redux/slices/reminderSlice";
import { TextField, Button, Grid, Typography, Divider } from "@mui/material";

const AddReminder = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReminder(formData));
    setFormData({
      name: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Add Reminder
      </Typography>
      <Divider />
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Reminder Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="date"
            label="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="time"
            label="Start Time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="date"
            label="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="time"
            label="End Time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Reminder
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddReminder;
