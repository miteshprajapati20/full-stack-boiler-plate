import { useEffect, useState } from "react"

export default function Register(){

    const [registerForm, setRegisterFormData] = useState({
        firstName: '',
        lastName:'',
        email:'',
        phone:'',
        password:'', 
        birthDate: ''
    });

    async function handleRegisterUser(event){
        event.preventDefault();
        registerForm.role = 'User';
        console.log('registerForm: ', registerForm);
        if(registerForm.firstName && registerForm.lastName && registerForm.email && registerForm.firstName && registerForm.password && registerForm.birthDate){
            const response = await fetch('http://localhost:5000/sign-up', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(registerForm)
            });
            const data = await response.json();
            console.log('data: ', data);
        }
    }

    function inputChangeHandler(event){
        setRegisterFormData({...registerForm, [event.target.name] : event.target.value})
    }



    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={() => handleRegisterUser(event)}>
               <label htmlFor="">FirstName : </label>
                <input
                    type="text"
                    name="firstName"
                    onChange={() => inputChangeHandler(event)}
                    value={registerForm.firstName}
                />
                <br />
               <label htmlFor="">LastName : </label>
                <input
                    type="text"
                    name="lastName"
                    onChange={() => inputChangeHandler(event)}
                    value={registerForm.lastName}
                />
                 <br />
               <label htmlFor="">Email : </label>
                <input
                    type="email"
                    name="email"
                    onChange={() => inputChangeHandler(event)}
                    value={registerForm.email}
                />
                 <br />
               <label htmlFor="">Phone : </label>
                <input
                    type="text"
                    name="phone"
                    onChange={() => inputChangeHandler(event)}
                    value={registerForm.phone}
                />
                 <br />
               <label htmlFor="">Password : </label>
                <input
                    type="password"
                    name="password"
                    onChange={() => inputChangeHandler(event)}
                    value={registerForm.password}
                />
                 <br />

               <label htmlFor="">BirthDate : </label>
                <input
                    type="date"
                    name="birthDate"
                    onChange={() => inputChangeHandler(event)}
                    value={registerForm.birthDate}
                />
                 <br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}