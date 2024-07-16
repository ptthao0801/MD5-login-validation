import React, { useState } from 'react';
import './App.css';

function App() {
    const message_error = {
        email: 'Email error',
        password: 'Password error'
    }

    const regex = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#$%^&*()+=._-]{6,}$/
    }

    const [form, setForm] = useState({})
    function handleChange(e) {
        const error = regex[e.target.name].test(e.target.value) ? "" : message_error[e.target.name]
        setForm({
            ...form,
            [e.target.name]: { value: e.target.value, error: error }
        })
    }
    function handleSubmit() {
        const isFilled =
            form.email && form.email.value &&
            form.password && form.password.value
        const isError = isFilled && (form.email.error || form.password.error)
        alert(isFilled && !isError ? 'Sign in successfully!' : 'Fill out all fields!')

    }
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div
                    className={`custom-input ${form.email &&
                        form.email.error &&
                        "custom-input-error"}`}
                >
                    <label>Email </label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange}
                    />
                    {form.email && form.email.error && (
                        <p className="error">Email error</p>
                    )}
                </div>
                <div
                    className={`custom-input ${form.password &&
                        form.password.error &&
                        "custom-input-error"}`}
                >
                    <label>Password </label>
                    <input
                        type="password"
                        name="password"
                        value={(form.password && form.password.value) || ""}
                        onChange={handleChange}
                    />
                    {form.password && form.password.error && (
                        <p className="error">Password error</p>
                    )}
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default App;
