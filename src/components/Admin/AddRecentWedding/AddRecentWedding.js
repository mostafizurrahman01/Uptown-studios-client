import React, { useState } from 'react';
import { set } from 'react-hook-form';
import Sidebar from '../../SplashBoard/Sidebar/Sidebar';
import './AddRecentWedding.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const AddRecentWedding = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('venue', info.venue)
        formData.append('description', info.description)
        

        fetch('http://localhost:7000/recentWedding', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section>
            <div style={containerStyle} className="div container-fluid row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 modify">
                    <h1>Recent Wedding</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Venue</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="venue" placeholder="Venue" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="description" placeholder="Description" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddRecentWedding;