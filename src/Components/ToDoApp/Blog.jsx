import BlogList from "./BlogList";
import useFetch from "../../Hooks/useFetch";
import '../../Assets/css/todo.css'
import Loading from "../Loading";
import { Link } from "react-router-dom";
import React from 'react';
import { useState } from "react";

import usePost from "../../Hooks/usePost";

const Blog = () => {

 

    const { data : blogs, loading, error } = useFetch("http://localhost:8000/users")

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
      };

      const [fields, setFields] = useState([{ type: 'text'  } , { type: 'textarea' } ]);

      const [textValues, setTextValues] = useState([]);
      
      const addFields = () => {
        setFields([...fields, { type: 'text' }, { type: 'textarea' }]);
      };
      // const data = {fieldTitle , fieldSection};
      // console.log(data);

      const handleTextChange  = (event, index, type) =>{
        const newValues = [...textValues];
        newValues[index] = { ...newValues[index], [type]: event.target.value };
        setTextValues(newValues);
        console.log(index , "dsad");
      };

      const handleSendValues = () => {
        console.log(textValues);

          const jsonValues = JSON.stringify(textValues);
          console.log(jsonValues);
        
        
     
    
      };


      //  const  {handleSubmit } = usePost('http://localhost:8000/posts', data);
       

    return (

        

        <div className="blog content">

            {/* <button onClick={handleClick}>Hello</button> */}
            {/* {Array.from(Array(count)).map((c, index) => {
            
                return <div>   <input style={{background: 'antiquewhite'}} key={c} name={"section-title" + index } type="text"></input>; <textarea style={{background: 'antiquewhite'}} name={"section-content" + index } id={index} cols="30" rows="10"></textarea> </div>
                
            })} */}
    <div>
      <button onClick={addFields}>Add Fields</button>
      {fields.map((field, index) => {
        if (field.type === 'text') {
          return (
            <div key={index/2}>
              <input
                type="text"
                placeholder={`Text field ${index/2}`}
                value={textValues[index/2]?.name ?? ''}
                onChange={event => handleTextChange(event, index/2, 'name')}
              />
            <br/>
              <textarea
                placeholder={`Textarea ${index/2}`}
                value={textValues[index/2]?.content ?? ''}
                onChange={event => handleTextChange(event, index/2, 'content')}
              />
            </div>
          );
        } 
      })}
      <button onClick={handleSendValues}>Send Values</button>
    </div>

            <button className="add-button">
                <Link to="/todoapp/create">   Add Blog </Link> 
            </button>
            { error && <div> {error} </div>}
            { loading &&  <Loading />}
            { blogs && <BlogList blogs={blogs} /> }


                    

       
                    {Array.from(count).map((key, index) => (
                                
                                <div key={index}>

                        { blogs && <BlogList blogs={blogs} /> }
                                </div>
                    ))}



        </div> 
        
      
        
    );

}

export default Blog;