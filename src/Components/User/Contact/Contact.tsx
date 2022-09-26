import React,{useRef} from "react";
import Heading from '../../Shared/Heading/Heading';

import axios, { AxiosError , AxiosResponse } from 'axios';
import { useFormik } from "formik";

import * as Yup from "yup";
import ContactTimeLine from "./ContactTimeLine";
import { toast } from "react-toastify";
import {motion} from 'framer-motion'
import { backendUrl } from "../../../Util/backendurl";
 
interface ContactInterface {name : string , email:string , message : string , phoneNo : string}
const Contact = () => {

 async function formSubmit(formData:ContactInterface, {resetForm}:any){
try {
  submitBtn.current.disabled= true ;
  let res : AxiosResponse = await axios.post(backendUrl +  '/contact', formData,{
    headers: {"content-type": "application/json"},
    withCredentials : true ,
  
  });
  console.log(res)
  toast.success('Form Submitted SuccessFully 🎉');
  submitBtn.current.disabled= false ;
resetForm();
}catch(error){
  submitBtn.current.disabled= false ;

  const err = error as AxiosError
  toast.error(err.message)
}

  }

  const submitBtn = useRef<any>()
  const contactSchema = Yup.object().shape({
    name: Yup.string().required("Name is Must Required"),
    email: Yup.string().email("Email Must Be Correct Please").required(),
    phoneNo: Yup.string()
      .required("Phone No is Required")
      .min(10, "Number Should At least of 10 chars"),
    message: Yup.string()
      .min(5, "Write Something Meaningful in message")
      .required("Message is Reuired"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      phoneNo: "",
    },
    validationSchema: contactSchema,
    onSubmit: formSubmit,
  });
  let { errors } = formik;
  return (
    <>
      <motion.section id="contact" initial={{opacity : 0 , y:'90px'}} whileInView={{opacity : 1 , y:'0'}} >
      <Heading heading ='Contact' sectionNo={7} id='contact'></Heading>


        <main>
          <div className="contactLine">
          <ContactTimeLine></ContactTimeLine>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <span className="error">{errors.name}</span>
            </div>
            <div>
              <input
                type="phone"
                name="phoneNo"
                id="phoneNo"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phoneNo}
              />
              <span className="error">{errors.phoneNo}</span>
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <span className="error">{errors.email}</span>
            </div>
            <div>
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                cols={30}
                rows={10}
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              <span className="error">{errors.message}</span>
            </div>
            <button  ref={submitBtn} className="btn btn-outlined" type="submit">
              Submit
            </button>
          </form>
        </main>
      </motion.section>
    </>
  );
};

export default Contact;
