import React from 'react'

export default function login() {
    return (
        <>

            <h1>Login Page</h1>

            <div className="box">

                <form action="">
                    <input type="text" placeholder='Enter emailId' />
                    <input type="text" placeholder='Enter password' />

                    <button type='submit'>Login</button>
                    <div>or</div>
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}
