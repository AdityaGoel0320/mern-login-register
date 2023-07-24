import React, { useState } from 'react'

export default function register() {

    let x = {
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    }
    const [obj, setobj] = useState(x);

    let onchange = () => {

    }
    return (
        <>
            <h1>Register page</h1>


            <div className="box">

                <form action="">
                    <input name={obj.name} onChange={onchange} type="text" placeholder='Enter name' />
                    <input name={obj.email} onChange={onchange} type="text" placeholder='Enter emailId' />
                    <input name={obj.password} onChange={onchange} type="text" placeholder='Enter password' />
                    <input name={obj.reEnterPassword} onChange={onchange} type="text" placeholder='Enter Repassword' />

                    <button type='submit'>Register</button>
                    <div>or</div>
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
