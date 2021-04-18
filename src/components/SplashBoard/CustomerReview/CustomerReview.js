import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const CustomerReview = () => {
    const [review, setReview] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...review };
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('name', review.name)
        formData.append('companyName', review.companyName)
        formData.append('description', review.description)
        

        fetch('https://quiet-chamber-19934.herokuapp.com/addReview', {
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
                    <h1>Review</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Company Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="companyName" placeholder="info Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input onBlur={handleBlur} type="description" class="form-control" name="description" placeholder="Say Something" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;