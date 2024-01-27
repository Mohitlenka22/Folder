import React from 'react'
import {NavLink} from "react-router-dom";
const Signup = () => {
  return (
    <section className='signup'>
        <div className="container mt-5">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-tile">
                        Signup
                    </h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input type="text" name="name"id="name" placeholder='name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input type="email" name="name"id="name" placeholder='Email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input type="text" name="name"id="name" placeholder='Phone number'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input type="text" name="name"id="name" placeholder='Profession'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input type="password" name="name"id="name" placeholder='Password'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input type="Password" name="name"id="name" placeholder='Confirm your password'/>
                        </div>
                        <div className="formgroup form-button">
                            <input type="submit" name="signup" className='form-submit' value="register"/>
                        </div>
                    </form>
                </div>
                    <div className="img">
                        <figure>
                            <img src="" alt="signin" />
                        </figure>
                        <NavLink to="/login"> Login</NavLink>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Signup