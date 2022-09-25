import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AdminContainer from "../../Shared/AdminContainer/AdminContainer";
import ImageInput from "../../Shared/ImageInput/ImageInput";
import { useUpdateMutation } from "../../../Redux/UserApi/User";
import { getUser } from "../../../Redux/userSlice";
import { Button } from "@mui/material";
const ChangeImages = () => {
  let { user } = useSelector((state: any) => state.userState);
  let [aboutImage, setAboutImage] = React.useState(
    user ? user.aboutImage.url : ""
  );
  let [mainImage, setMainImage] = React.useState(
    user ? user.mainImage.url : ""
  );
  let [skill1, setSkill1] = React.useState(user ? user.skillCube[0].url : "");
  let [skill2, setSkill2] = React.useState(user ? user.skillCube[1].url : "");
  let [skill3, setSkill3] = React.useState(user ? user.skillCube[2].url : "");
  let [skill4, setSkill4] = React.useState(user ? user.skillCube[3].url : "");
  let [skill5, setSkill5] = React.useState(user ? user.skillCube[4].url : "");
  let [skill6, setSkill6] = React.useState(user ? user.skillCube[5].url : "");
  const dispatch = useDispatch();

  const [update, updateResult] = useUpdateMutation();
  function changeImages() {
    console.log( [
      {
        public_id: user.skillCube[0].public_id,
        url: skill1,
      },
      {
        public_id: user.skillCube[1].public_id,
        url: skill2,
      },

      {
        public_id: user.skillCube[2].public_id,
        url: skill3,
      },
      {
        public_id: user.skillCube[3].public_id,
        url: skill4,
      },
      {
        public_id: user.skillCube[4].public_id,
        url: skill5,
      },
      {
        public_id: user.skillCube[5].public_id,
        url: skill6,
      },
    ]);
    update({
      aboutImage: { public_id: user.aboutImage.public_id, url: aboutImage },
      mainImage: { public_id: user.mainImage.public_id, url: mainImage },
      skillCube: [
        {
          public_id: user.skillCube[0].public_id,
          url: skill1,
        },
        {
          public_id: user.skillCube[1].public_id,
          url: skill2,
        },

        {
          public_id: user.skillCube[2].public_id,
          url: skill3,
        },
        {
          public_id: user.skillCube[3].public_id,
          url: skill4,
        },
        {
          public_id: user.skillCube[4].public_id,
          url: skill5,
        },
        {
          public_id: user.skillCube[5].public_id,
          url: skill6,
        },
      ],
    });
  }
  React.useEffect(() => {
    toast.dismiss();
    if (updateResult.isLoading) {
      toast.loading("Updating the Images");
    }
    if (updateResult.isError) {
      toast.error(updateResult.error as any);
    }
    if (updateResult.isSuccess) {
      toast.success("SuccessFully Updated 🎉");
      dispatch(getUser() as any);
    }
  }, [updateResult]);

  return (
    <div>
      <AdminContainer heading="Change Images">
        <div>
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">About Image</h1>
            <ImageInput
              image={aboutImage}
              setImage={setAboutImage}
            ></ImageInput>
          </div>
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">Main Image</h1>
            <ImageInput image={mainImage} setImage={setMainImage}></ImageInput>
          </div>{" "}
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">Skill 1</h1>
            <ImageInput image={skill1} setImage={setSkill1}></ImageInput>
          </div>{" "}
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">Skill 2</h1>
            <ImageInput image={skill2} setImage={setSkill2}></ImageInput>
          </div>{" "}
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">Skill 3</h1>
            <ImageInput image={skill3} setImage={setSkill3}></ImageInput>
          </div>{" "}
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">Skill 4</h1>
            <ImageInput image={skill4} setImage={setSkill4}></ImageInput>
          </div>{" "}
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">Skill 5</h1>
            <ImageInput image={skill5} setImage={setSkill5}></ImageInput>
          </div>{" "}
          <div className="border border-stone-400 my-3">
            <h1 className="text-4xl text-center my-4 font-bold">Skill 6</h1>
            <ImageInput image={skill6} setImage={setSkill6}></ImageInput>
          </div>
    <div className="my-7">
    <Button
            color="primary"
            onClick={changeImages}
            variant="contained"
            fullWidth
          >
            Change Images
          </Button>
    </div>
        </div>
      </AdminContainer>
    </div>
  );
};

export default ChangeImages;

type Image = {
  public_id: string;
  url: string;
};
