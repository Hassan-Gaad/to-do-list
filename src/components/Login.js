import React, { useState } from 'react'




const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = (e) => {
        console.log("submitted");
        e.preventDefault();

        if (!validate(userName, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/, 'email')) {
            alert("Insure you entered a valid email");
        } else if (!validate(password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'password')) {
            alert("Insure you entered a valid password");
        }else{
            console.log('opps');
        }
    }

    const validate = (str, regex, type) => {
        if (regex.test(str)) {
            return true;

        } else {
        console.log('not valide');
            return false;
        }
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">User Name</label>
                <input type="text" name="userName" placeholder="Enter your User Name" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <input type="submit" name="" id="" value="Login" className="btn btn-block" />
        </form>
    )
}

export default Login
