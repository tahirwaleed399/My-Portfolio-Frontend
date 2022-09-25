export default interface User {
    name : string ;//1
    email : string ;//1
    tagLines : string[];//1
    homeAbout:string; //1
    mainImage:Image;
    about  : string ; // 1 
    aboutImage : Image;
    skills: Skill[];
    skillCube : Array<Image>;
    timeLine : Array<TimeLine>;
    resume : {
      public_id : string , 
      url : string ,
    }
}

type Image =  {
    type: string;
          url: string;
}

type Skill =  {
    name: string,
    color: string,
    percentage: number,
  }
  
  type TimeLine =  {
    title: string,
    year: string,
    _id ?: string 
    uuid ?: string 
  }

    
 

    
  
   
 
   