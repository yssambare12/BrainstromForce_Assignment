// Branstrom Force Assignment

import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-left'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Let's set up your account
        </h1>
        <h4>
        Already have an account ? <a href='#'>Sign in</a>
        </h4>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Your name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Email address'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='dropdown'
            name='dropdown'
            placeholder='I would describe my user type as'
            value={values.dropdown}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
        Next
        </button>
        <span className='form-input-login'>
         By clicking the "Next" button, you agree to creating free account, and to <a href='#'>Terms of Services</a> and <a href='#'>Privicy Policy</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
