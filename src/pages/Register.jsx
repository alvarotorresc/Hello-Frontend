import React from 'react'
import styled from "styled-components"
import { ToastContainer, toast } from "react-toastify";
import { Form, Link } from "react-router-dom";
import Logo from "../assets/icon.png"

export default function Register() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  return (
    <FormContainer>
      <Form method="post">
        <div className='brand'>
          <img src={Logo} alt='Logo'/>
          <h1>Hello Chat</h1>
        </div>
        <input type="text" name="username" placeholder='Username'/>
        <input type="email" name="email" placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <input type="password" name="confirmPassword" placeholder='Confirm Password'/>
        <button type="submit">Sign Up</button>
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </Form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #003459;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #FFFFFF;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #003459;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #FFFFFF;
    border-radius: 0.4rem;
    color: #FFFFFF;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #007EA7;
      outline: none;
    }
  }
  button {
    background-color: #FFFFFF;
    color: #003459;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #007EA7;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;