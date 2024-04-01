import React from 'react'

const RegisterPage = () => {
  return (
    <div className='register'>
        <div className='register-content'>
            <form>
                <input
                    placeholder='First Name'
                    name='firstname'
                    required
                />
                <input
                    placeholder='Last Name'
                    name='lastname'
                    required
                />
                <input
                    placeholder='Email'
                    name='email'
                    type='email'
                    required
                />
                <input
                    placeholder='Password'
                    name='password'
                    type='password'
                    required
                />
                <input
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    type='password'
                    required
                />
                <input 
                    id='image'
                    type='file' 
                    name='profileImage' 
                    accept='image/*' 
                    required 
                    style={{display: "none"}}
                />
                <label htmlFor='image'>
                    <img src='/assets/addImage.png' alt='add profile photo'/>
                    <p>Upload Your Photo</p>
                </label>
                <button type='submit'>Register</button>
            </form>
            <a href='/login'> Already Have an Account ? Log In Here</a>
        </div>
    </div>
  )
}

export default RegisterPage