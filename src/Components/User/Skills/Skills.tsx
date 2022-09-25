import { Canvas } from "@react-three/fiber";
import React from "react";
import Heading from '../../Shared/Heading/Heading';
import Cube from "./Cube/Cube";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { AiOutlineConsoleSql } from "react-icons/ai";
import User from "../../../Interfaces/User";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion';

const dataLabels = [95 , 90 , 100 , 100 , 70 , 80 , 70 , 90 , 95 , 90, 85 , 50] 
const Skills = () => {
   const {user} : {user : User} = useSelector((state:any)=>state.userState);

  return (
    <motion.section id="skills"  initial={{opacity : 0 , y:'90px'}} whileInView={{opacity : 1 , y:'0'}}>
        <Heading heading ='Skills' sectionNo={2} id='skills'></Heading>


      <main>
     {
      user &&    <div className="cube">
      <Canvas id="cubeBox">
        <Cube images={user.skillCube.map((image)=>image.url) }></Cube>
      </Canvas>
    </div>
     }
        {
          user && <div className="skillsChart">
          <Bar
          datasetIdKey="skillsCharts"
          data={
            {
              labels:user.skills.map((skill)=>skill.name),
              datasets: [
                {
                  label: "PERCENTAGE",
                  data : user.skills.map((skill)=>skill.percentage),
                  backgroundColor: user.skills.map((skill)=>skill.color),
                  
                  
                },
              ],
              
            } as any
          }
          
          options={{
            responsive: true,
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            },
            plugins: {
                title: {
                    display: true,
                text: "Chart Shows Percentage of skills i have",
              },
            },
          maintainAspectRatio:false ,   
            scales: {
              y:{
                beginAtZero:true , 
               ticks:{
                // stepSize:5,
                
                callback: function(value:any, index:any, values:any) {
                             
                 return  value;
                  
              }
               }
              }
            }
          }}
          >
          
          </Bar>
          
          
                  </div>
        }
      </main>
    </motion.section>
  );
};

export default Skills;
