import React, { useState } from 'react'

function Login({pogin,error}) {
    const [details, setDetails] = useState({name: "", password:""})

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <div style={{ marginLeft: '60px' }} className="form-inner">
                <h2>Giriş</h2>
                <div className="form-group">
                    <label htmlFor="name">KullanıcıAdı:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Şifre:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Giriş" />
            </div>
        </form>
    )
}

export default Login
