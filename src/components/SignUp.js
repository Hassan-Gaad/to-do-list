import { React, useState } from 'react'

const SignUp = () => {

    const [user, setUser] = useState({
        name: '',
        userName: "",
        email: "",
        password: '',
        confirmPassword: ''
    });

    const [userErrors, setUserErrors] = useState({
        name: '',
        username: "",
        email: "",
        password: '',
        confirmPassword: ''
    });


    const onSubmit = (e) => {
        console.log("submitted");
        e.preventDefault();
        console.log(user);
    }

    const validate = (str, regex) => {
        if (!regex.test(str)) {
            return true;
        }
    }

    const handelChanges = (e) => {
        console.log(e.target.value, e.target.name);


        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })

        switch (e.target.name) {
            case "name":
                setUserErrors({
                    ...userErrors,
                    name: e.target.value.length === 0
                    ? "This field is required"
                    : null,
                });
                break;
            case "userName":
                setUserErrors({
                    ...userErrors,
                    username: e.target.value.length === 0
                    ? "This field is required"
                    : /\s/g.test(e.target.value)
                    ? "user name should not contain spaces"
                    : null,
                });
                break;
            case "email":
                setUserErrors({
                    ...userErrors,
                    email: e.target.value.length === 0
                    ? "This field is required"
                    : validate(e.target.value, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/)
                    ? "Incorrect email"
                    : null,
                });
                break;
            case "password":
                setUserErrors({
                    ...userErrors,
                    password: e.target.value.length === 0
                    ? "This field is required"
                    : validate(e.target.value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
                    ? "password less than 8 characters or less than one lowercase , one uppercase ,  at least one digit and special character"
                    : null,
                });
                break;
            case "confirmPassword":
                setUserErrors({
                    ...userErrors,
                    confirmPassword: e.target.value.length === 0
                    ? "This field is required"
                    :user.password!==e.target.value
                    ?"Not match password"
                    : null,
                });
                break;
            default:
                break;
        }

        
    }

    return (
        <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter your Name" name="name" value={user.name} onChange={(e) => { handelChanges(e) }} />
                <small className="text-danger">{userErrors.name}</small>
            </div>
            <div className="form-control">
                <label htmlFor="">User Name</label>
                <input type="text" placeholder="Enter your User Name" name="userName" value={user.userName} onChange={(e) => { handelChanges(e) }} />
                <small className="text-danger">{userErrors.username}</small>
            </div>
            <div className="form-control">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your Email" name="email" value={user.email} onChange={(e) => { handelChanges(e) }} />
                <small className="text-danger">{userErrors.email}</small>
            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" name="password" value={user.password} onChange={(e) => { handelChanges(e) }} />
                <small className="text-danger">{userErrors.password}</small>
            </div>
            <div className="form-control">
                <label htmlFor="">Confirem Password</label>
                <input type="password" placeholder="Password" name="confirmPassword" value={user.confirmPassword} onChange={(e) => { handelChanges(e) }} />
                <small className="text-danger">{userErrors.confirmPassword}</small>
            </div>

            <input type="submit" name="" id="" value="SignUp" className="btn btn-block" />
        </form>
    )
}

export default SignUp
