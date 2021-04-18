import React, { useState } from 'react';
import Sidebar from '../../SplashBoard/Sidebar/Sidebar';
import './MakeAdmin.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }

    const handleSubmit = () => {

        const formData = new FormData()
        formData.append('email', admin.email)
        
        fetch('https://quiet-chamber-19934.herokuapp.com/addAdmin', {
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
                    <h1>Make Admin</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="email" placeholder="email" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;