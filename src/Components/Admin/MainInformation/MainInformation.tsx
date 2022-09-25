import React, { useState } from "react";
import AdminContainer from "../../Shared/AdminContainer/AdminContainer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Shared/Loader/Loader";
import User from "../../../Interfaces/User";
import { userState } from "../../../Interfaces/UserState";
import { useUpdateMutation } from "../../../Redux/UserApi/User";
import { toast } from "react-toastify";
import { getUser } from "../../../Redux/userSlice";
const MainInformation = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess }: userState = useSelector(
    (state: any) => state.userState
  );
  const [about, setAbout] = useState(user?.about);
  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    resume: user?.resume,
    homeAbout: user?.homeAbout,
    tagline1: user?.tagLines[0],
    tagline2: user?.tagLines[1],
    tagline3: user?.tagLines[2],
  });
  const [update, updateResult] = useUpdateMutation();

  React.useEffect(() => {
    toast.dismiss()
    if (updateResult.isLoading) {
      toast.loading("Updating the Post");
    }
    if (updateResult.isError) {
      toast.error(updateResult.error as any);
    }
    if (updateResult.isSuccess) {
      toast.success("SuccessFully Updated 🎉");
      dispatch(getUser() as any);
    }
  }, [updateResult]);
  function handleLogin(e: any) {
    e.preventDefault();
    let tempObj = {
      name: formData.name,
      email: formData.email,
      homeAbout: formData.homeAbout,

      about: about,
      taglines: [formData.tagline1, formData.tagline2, formData.tagline3],
      resume :  formData.resume
    };

    update(tempObj);
  }
  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <>
      <AdminContainer heading="Main Information">
        <div>
          {isLoading && <Loader></Loader>}

          {isSuccess && (
            <form onSubmit={handleLogin} className="mainInfo">
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
                value={formData.email}
                label="Email"
                name="email"
                variant="filled"
                onChange={handleChange}
                fullWidth
              />
              <ReactQuill theme="snow" value={about} onChange={setAbout} />
              <textarea
                name="homeAbout"
                value={formData.homeAbout}
                id="homeAbout"
                onChange={handleChange}
                cols={20}
                rows={10}
                placeholder="Home About"
              ></textarea>
              <TextField
                id="filled-basic"
                value={formData.tagline1}
                label="Tagline1"
                onChange={handleChange}
                name="tagline1"
                variant="filled"
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Tagline2"
                value={formData.tagline2}
                onChange={handleChange}
                name="tagline2"
                variant="filled"
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Tagline3"
                value={formData.tagline3}
                onChange={handleChange}
                name="tagline3"
                variant="filled"
                fullWidth
              /> 
              
                 <TextField
                id="filled-basic"
                label="Resume"
                value={formData.resume}
                onChange={handleChange}
                name="resume"
                variant="filled"
                fullWidth
              />

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          )}
        </div>
      </AdminContainer>
    </>
  );
};

export default MainInformation;
