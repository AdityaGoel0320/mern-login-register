import React from 'react'

export default function register() {
    return (
        <>
            <h1>Register page</h1>


            <div className="box">

                <form action="">
                    <input type="text" placeholder='Enter name' />
                    <input type="text" placeholder='Enter emailId' />
                    <input type="text" placeholder='Enter password' />
                    <input type="text" placeholder='Enter Repassword' />

                    <button type='submit'>Register</button>
                    <div>or</div>
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
