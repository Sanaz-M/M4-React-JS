

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); }


    const onSubmit = async (e) => {
        e.preventDefault();
        try {

            if (password === password2) {
                setFormData = ({
                    name,
                    email,
                    password,
                })

            } else {
                console.log('Passwords do not match');
            }

            } 
            catch (err) {
                console.error(err);
            }
        }

    return (
        <Fragment>
            <h1 className='large text-primary'>Sign Up</h1>
            <p className='lead'>
                <i className='fas fa-user'></i> Create Your Account
            </p>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                    />
                    <small className='form-text'>
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='password'
                        placeholder='Password'
                        name='password'
                        minLength='6'
                        value={password}
                    />
                </div>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        minLength='6'
                        value={password2}
                    />
                </div>
                <input
                    onChange={onChange}
                    type='submit'
                    className='btn btn-primary'
                    value='Register'
                />
            </form>
            <p className='my-1'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
    );
};

export default Registration