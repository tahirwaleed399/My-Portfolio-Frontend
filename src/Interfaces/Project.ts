export interface Project {
    name : string ;
    description : string ;
    projectImage : Image | string ;
    technologies : technology[];
    _id : string;
    liveLink: string ;
    githubLink : string;

}

type Image = {
    public_id : string;
    url : string ;
}

 type technology = {
    id : string ;
    tag : string ;
}