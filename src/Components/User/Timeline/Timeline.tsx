import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Heading from '../../Shared/Heading/Heading';
import User from '../../../Interfaces/User';
import { useSelector } from 'react-redux';

const TimelineComponent = () => {
  const {user} : {user : User} = useSelector((state:any)=>state.userState);
 
  return (
    <React.Fragment>
      <section id='timeline'>

      <Heading heading ='Timeline' sectionNo={4} id='timeline'></Heading>

    <main>
        <div className="timeline">
        <Timeline position="alternate">
          {
            user && user.timeLine.map((timeline)=>{
              return (
                      <TimelineItem key={timeline._id}>
          <TimelineOppositeContent className='slate timeLineText'>

            {timeline.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className='green timeLineText'>{timeline.title}</TimelineContent>

        </TimelineItem>
              )
            })
          }
 
     
      </Timeline>
        </div>
    </main>

      </section>
    </React.Fragment>
  )
}

export default TimelineComponent