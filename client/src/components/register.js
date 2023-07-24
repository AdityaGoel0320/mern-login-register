import React from 'react'

export default function register() {

   

    let onchange = ()=>{

    }
    return (
        <>
            <h1>Register page</h1>


            <div className="box">

                <form action="">
                    <input name = {User.name} onChange={onchange} type="text" placeholder='Enter name' />
                    <input  name = {User.name} onChange={onchange}type="text" placeholder='Enter emailId' />
                    <input name = {User.name} onChange={onchange} type="text" placeholder='Enter password' />
                    <input  name = {User.name} onChange={onchange}type="text" placeholder='Enter Repassword' />

                    <button type='submit'>Register</button>
                    <div>or</div>
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
