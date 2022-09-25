
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import { Container } from "@mui/system";
import Navbar from "./Components/User/Navbar/Navbar";
import Footer from "./Components/User/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminProtectedRoute from "./Routes/AdminProtectedRoute";
import Admin from "./Screens/Admin/Admin";
import MainInformation from "./Components/Admin/MainInformation/MainInformation";
import ChangeImages from "./Components/Admin/ChangeImages/ChangeImages";
import Timelines from "./Components/Admin/Timelines/Timelines";
import AdminProjects  from "./Components/Admin/Projects/Projects";
import AddProject from "./Components/Admin/AddProject/AddProject";
import Submissions from "./Components/Admin/Submissions/Submissions";
import UpdateProject from "./Components/Admin/UpdateProject/UpdateProject";
import AddSkills from "./Components/Admin/AddSkills/AddSkills";
import AnimateScreen from "./Screens/AnimateScreen/AnimateScreen";
import ProjectScreen from "./Screens/ProjectScreen/ProjectScreen";
import "swiper/css/bundle";
import AdminTestimonial from "./Components/Admin/AdminTestimonial/AdminTestimonial";
import AdminTestimonials from "./Components/Admin/Testimonials/AdminTestimonials";
import UpdateTestimonials from "./Components/Admin/UpdateTestimonials/UpdateTestimonials";
function App() {

  return (
    <>
      <ToastContainer />
        <AnimateScreen></AnimateScreen>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
<Home></Home>
              
            </Layout>
          }
        ></Route>
        
          <Route
          path="/projects"
          element={
            <Layout>

              <ProjectScreen />
            </Layout>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <Admin></Admin>
            </AdminProtectedRoute>
          }
        >

          <Route  index element={<MainInformation/>}></Route>
          <Route  path="changeImages" element={<ChangeImages/>}></Route>
          <Route  path="timelines" element={<Timelines/>}></Route>
          <Route  path="projects" element={<AdminProjects/>}></Route>
          <Route  path="addProject" element={<AddProject/>}></Route>
          <Route  path="submissions" element={<Submissions/>}></Route>
          <Route  path="addSkills" element={<AddSkills/>}></Route>
          <Route  path="testimonials" element={<AdminTestimonials/>}></Route>
          <Route  path="testimonials/:_id" element={<UpdateTestimonials/>}></Route>
          <Route  path="addTestimonial" element={<AdminTestimonial/>}></Route>
          <Route  path="projects/update/:_id" element={<UpdateProject/>}></Route>


        </Route>
      </Routes>
    </>
  );
}

export default App;

function Layout({ children }: any) {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="xl">{children}</Container>
      <Footer></Footer>
    </>
  );
}
