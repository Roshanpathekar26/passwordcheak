// src/PasswordValidator.jsx

import React, { useState } from 'react';

const Password = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const evaluatePasswordStrength = (password) => {
        const lengthCriteria = password.length >= 8;
        const numberCriteria = /\d/.test(password);
        const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const uppercaseCriteria = /[A-Z]/.test(password);
        const lowercaseCriteria = /[a-z]/.test(password);

        const criteriaMet = [
            lengthCriteria,
            numberCriteria,
            specialCharCriteria,
            uppercaseCriteria,
            lowercaseCriteria
        ].filter(Boolean).length;

        switch (criteriaMet) {
            case 5:
                return 'Excellent';
            case 4:
                return 'Strong';
            case 3:
                return 'Very Good';
            case 2:
                return 'Good';
            default:
                return 'Weak';
        }
    };

    const handleChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(evaluatePasswordStrength(newPassword));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log('Password submitted:', password);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Password Validator</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    style={{ padding: '10px', width: '300px' }}
                />
                <div style={{ marginTop: '20px', fontSize: '1.5em', color: 'blue' }}>
                    Strength: {strength}
                </div>
                <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1em' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Password;
