import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
const ContactTimeLine = () => {
  return (
<>

<Timeline position="alternate">

<TimelineItem>
  <TimelineOppositeContent className="slate  timelineContent">
    <a
      className="cursor-pointer"
      href="https://instagram.com/waleedcodez"
      target={"_blank"}
    >
      waleedcodez
    </a>
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
      <a
        className="cursor-pointer"
        href="https://instagram.com/waleedcodez"
        target={"_blank"}
      >
        {" "}
        <AiFillInstagram className="icon" />
      </a>
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent className="green timelineContent">
    Instagram
  </TimelineContent>
</TimelineItem>{" "}


<TimelineItem>
  <TimelineOppositeContent className="slate  timelineContent">
    <a
      className="cursor-pointer"
      href="https://twitter.com/tahirwaleed399"
      target={"_blank"}
    >
      tahirwaleed399
    </a>
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
      <a
        className="cursor-pointer"
        href="https://twitter.com/tahirwaleed399"
        target={"_blank"}
      >
        {" "}
        <AiFillTwitterSquare className="icon" />
      </a>
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent className="green timelineContent">
    Twitter
  </TimelineContent>
</TimelineItem>{" "}


<TimelineItem>
  <TimelineOppositeContent className="slate  timelineContent">
    <a
      className="cursor-pointer"
      href="https://www.linkedin.com/in/tahirwaleed399/"
      target={"_blank"}
    >
      waleedcodez
    </a>
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/in/tahirwaleed399/"
        target={"_blank"}
      >
        {" "}
        <AiFillLinkedin className="icon" />
      </a>
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent className="green timelineContent">
    LinkedIn
  </TimelineContent>
</TimelineItem>{" "}


<TimelineItem>
  <TimelineOppositeContent className="slate  timelineContent">
    <a
      className="cursor-pointer"
      href="https://facebook.com/tahirwaleed399"
      target={"_blank"}
    >
      tahirwaleed399
    </a>
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
      <a
        className="cursor-pointer"
        href="https://facebook.com/tahirwaleed399"
        target={"_blank"}
      >
        {" "}
        <AiFillFacebook className="icon" />
      </a>
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent className="green timelineContent">
    Facebook
  </TimelineContent>
</TimelineItem>{" "}


<TimelineItem>
  <TimelineOppositeContent className="slate  timelineContent">
    <a
      className="cursor-pointer"
      href="https://github.com/tahirwaleed399"
      target={"_blank"}
    >
      tahirwaleed399
    </a>
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
      <a
        className="cursor-pointer"
        href="https://github.com/tahirwaleed399"
        target={"_blank"}
      >
        {" "}
        <FaGithubSquare className="icon" />
      </a>
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent className="green timelineContent">
    Github
  </TimelineContent>
</TimelineItem> <TimelineItem>
  <TimelineOppositeContent className="slate  timelineContent">
    <a
      className="cursor-pointer"
      href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tahirwaleed399@gmail.com"
      target={"_blank"}
    >
      tahirwaleed399
    </a>
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
      <a
        className="cursor-pointer"
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tahirwaleed399@gmail.com"
        target={"_blank"}
      >
        {" "}
        <MdEmail className="icon" />
      </a>
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent className="green timelineContent">
    Email
  </TimelineContent>
</TimelineItem>


<TimelineItem>
  <TimelineOppositeContent className="slate  timelineContent">
    <a
      className="cursor-pointer"
      href="https://wa.me/923336998773"
      target={"_blank"}
    >
      +92 333 699 8773
    </a>
  </TimelineOppositeContent>
  <TimelineSeparator>
    <TimelineConnector />
    <TimelineDot>
      <a
        className="cursor-pointer"
        href="https://wa.me/923336998773"
        target={"_blank"}
      >
        {" "}
        <IoLogoWhatsapp className="icon" />
      </a>
    </TimelineDot>
    <TimelineConnector />
  </TimelineSeparator>
  <TimelineContent className="green timelineContent">
    Whatsapp
  </TimelineContent>
</TimelineItem>
</Timeline>
</>
  )
}

export default ContactTimeLine