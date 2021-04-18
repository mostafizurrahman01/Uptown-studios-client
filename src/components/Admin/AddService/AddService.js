import React, { useState } from 'react';
import { set } from 'react-hook-form';
import Sidebar from '../../SplashBoard/Sidebar/Sidebar';
import './AddService.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const AddService = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newInfo = { ...service };
        newInfo[e.target.name] = e.target.value;
        setService(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', service.title)
        formData.append('timePerDay', service.timePerDay)
        formData.append('price', service.price)
        

        fetch('http://localhost:7000/addService', {
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
                    <h1>Add New Service</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="title" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Limited Time</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="timePerDay" placeholder="timePerDay" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Price</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="price" placeholder="Description" />
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

export default AddService;