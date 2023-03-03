import { useState } from "react";
import usePost from "../../Hooks/usePost";

const CreateBlog = () => {

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [dob, setDob ] = useState('');
    const [work, setWork ] = useState('pubg');
    const [city, setCity ] = useState('chakwal');
    const data = {name,dob, work, email, city};
    const  {handleSubmit ,error ,loading} = usePost('http://localhost:8000/users', data);

    

    return(
        <div className="create">
            { error && <div> {alert(error)} </div>}
      
            <h2>Add new blog</h2>

            <form onSubmit={handleSubmit}>

                <label> Name </label>
                <input type="text" required value={name} name="name" onChange= {(e) => setName(e.target.name)} />

                <label> Email </label>
                <input type="text" required value={email} onChange= {(e) => setEmail(e.target.value)} />

                <label> Date of birth </label>
                <input type="text" required value={dob} onChange= {(e) => setDob(e.target.value)} />

                <label> Work </label>
                <select value={work} onChange= {(e) => setWork(e.target.value)} >
                    <option value="pubg">pubg</option>
                    <option value="dota">dota</option>
                </select>

                <label> City </label>
                <select value={city} onChange= {(e) => setCity(e.target.value)} >
                    <option value="chakwal">Chakwal</option>
                    <option value="islamabad">Islamabad</option>
                </select>


                { !loading && <button> Add Blog </button> }
                { loading && <button disabled> Adding Blog..... </button> }

            </form>

        </div>
    );

}

export default CreateBlog;