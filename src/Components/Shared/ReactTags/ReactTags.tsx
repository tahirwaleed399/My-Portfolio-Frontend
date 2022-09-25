import React from 'react'
import uuidv4 from '../../../Util/uuid';
import styles from './ReactTags.module.css';
import {ImCross}from 'react-icons/im'
const ReactTags = ({data , setData } : PROPS) => {

    const [inputValue , setInputValue ] = React.useState('');


    function handleTagSubmit( e : React.SyntheticEvent){
        e.preventDefault();

            if(inputValue.length > 1){

                let trimmedValue = inputValue.trim();
                let tags = trimmedValue.split(',');
                tags = tags.filter(tag=>tag.length!==0);
                let tempArr : any=[]
                tags.forEach((tag)=>{
                    console.log(tag)
                    tempArr.push({tag , id : uuidv4()})
                })
                setData([...data,...tempArr])
                setInputValue('')
            }
            


    }
    function deleteTag(id:string,index:number){
        let newTags = [...data];
        newTags.splice(index,1);
        setData(newTags);

    }

    function clearTags(){
        setData([]);
    }
  return (
    <div>


<div className={styles.tags}>

    {
    data.length === 0 ? <h1>Nothing to show</h1> :<>
    {data.map((tag:any , index:number )=>(<>
    <div key={tag.id} className={styles.tag}>
    <span>{tag.tag}</span>
    <span  style={{cursor:'pointer' , fontSize:'10px'}} onClick={()=> deleteTag(tag.id,index)}><ImCross/></span>
    </div>
    </>))}
    </>
    }
</div>



<form onSubmit={handleTagSubmit}>

<input className={styles.tagInput} placeholder='Enter Tags' name='tagInput' type="text"  value={inputValue} onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{setInputValue(e.target.value)}} />

</form>

<button onClick={clearTags} className={styles.clearButton}>Clear All Tags</button>


    </div>
  )
}

export default ReactTags

type PROPS = {
    data : any;
    setData : any;
};