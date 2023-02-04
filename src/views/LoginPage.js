import React from 'react'

const LoginPage = () => {
  return (
    <div className='container login'>
      <h3>Login System</h3>
      <form >
        <div className='input-field'>
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className='input-field'>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <a href="/">Forgot password</a>
        <div className='d-flex justify-content-right'>
          <button>Login</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;