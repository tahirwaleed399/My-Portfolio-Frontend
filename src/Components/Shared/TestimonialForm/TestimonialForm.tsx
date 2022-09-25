import { Button, TextField } from "@mui/material";
import ImageInput from "../../Shared/ImageInput/ImageInput";
import React, { useState } from "react";
import {
  useAddTestimonialMutation,
  useUpdateTestimonialMutation,
} from "../../../Redux/Testimonials/Testimonials";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TestimonialForm = ({ data }: any) => {
  let [addTestimonial, updateResult] = useAddTestimonialMutation();
  let [updateTestimonial, updateResult2] = useUpdateTestimonialMutation();
  const navigate = useNavigate();

  React.useEffect(() => {
    toast.dismiss();
    if (updateResult.isLoading || updateResult2.isLoading) {
      toast.loading("Updating the Post");
    }
    if (updateResult.isError || updateResult2.isError) {
      toast.error(updateResult.error as any);
    }
    if (updateResult.isSuccess || updateResult2.isSuccess) {
      toast.success("SuccessFully Updated 🎉");
      navigate('/admin/testimonials')
      
    }
  }, [updateResult , updateResult2]);
  const [image, setImage] = useState(data ? data.image.url : "");
  const [formData, setFormData] = useState(
    !data
      ? {
          name: "",
          message: "",
        }
      : {name : data.name , message : data.message}
  );
  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!data) {
      addTestimonial({
        ...formData,
        image: {
          public_id: "",
          url: image,
        },
      });
    } else {
      console.log({
        ...formData,
        _id: data._id,
        image: {
          public_id: data.image.public_id,
          url: image,
        },
      });
      updateTestimonial({
        ...formData,
        _id: data._id,
        image: {
          public_id: data.image.public_id,
          url: image,
        },
      });
    }
  }
  return (
    <div>
      <form id="testimonialForm" onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          value={formData.name}
          label="Name"
          name="name"
          variant="filled"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id="filled-basic"
          value={formData.message}
          label="Message"
          name="message"
          variant="filled"
          onChange={handleChange}
          fullWidth
          multiline
        />

        <ImageInput image={image} setImage={setImage}></ImageInput>

        <Button type="submit" color="primary" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TestimonialForm;
