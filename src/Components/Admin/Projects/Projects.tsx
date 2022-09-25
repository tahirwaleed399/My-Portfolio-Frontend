import Loader from "../../Shared/Loader/Loader";
import React from "react";
import { Project } from "../../../Interfaces/Project";
import {
  useGetProjectsQuery,
  useReorderProjectsMutation,
} from "../../../Redux/ProjectsApi/ProjectApi";
import AdminContainer from "../../Shared/AdminContainer/AdminContainer";
import ProjectCard from "./ProjectCard/ProjectCard";
import Nestable from "react-nestable";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const AdminProjects = () => {
  let [reorder, reorderResult] = useReorderProjectsMutation();
  let { isLoading, isSuccess, data, isError } = useGetProjectsQuery();

  React.useEffect(() => {
    toast.dismiss();
    if (reorderResult.isLoading) {
      toast.loading("Reordering Projects");
    }
    if (reorderResult.isError) {
      toast.error(reorderResult.error as any);
    }
    if (reorderResult.isSuccess) {
      toast.success("SuccessFully Reordered 🎉");
    }
    setOrderedList(data)
   
  }, [reorderResult,data]);
  const [orderedList, setOrderedList] = React.useState(data);

  function handleChange(e: any) {
    setOrderedList(e.items);
  }
  function handleReordered() {
    console.log(orderedList);
    reorder(orderedList);
  }
  const renderProject = ({ item }: any) => {
    return (
      <>
        <ProjectCard project={item} id={item.id}></ProjectCard>
      </>
    );
  };
  return (
    <div className="projectsContainer">
      <h1 className="text-6xl my-10 mt-36 font-bold text-center">Projects</h1>

      {/* {data && JSON.stringify(data)} */}

      <div className="projects">
    
        {isLoading && <Loader></Loader>}
  
        {isSuccess && data && (
          <Nestable
            items={orderedList}
            renderItem={renderProject}
            onChange={handleChange}
          />
        )}

        <Button
          color="success"
          variant="contained"
          fullWidth
          onClick={handleReordered}
        >
          Reorder
        </Button>
      </div>
    </div>
  );
};

export default AdminProjects;
