import {useEffect, useState} from "react";

function MyForm() {
    const [validName, setValidName] = useState(false);
    const [validSurname, setValidSurname] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validForm, setValidForm] = useState(false);

    useEffect(() => {
        validAllFields();
    }, [validName, validSurname, validEmail, validPassword]);

    function validationForm(nameField, validation) {
        switch (nameField) {
            case 'Name':
                setValidName(validation);
                break;
            case 'Surname':
                setValidSurname(validation);
                break;
            case 'Email':
                setValidEmail(validation);
                break;
            case 'Pass':
                setValidPassword(validation);
                break;
            default:
                break;
        }
    }

    function validAllFields() {
        if (validName && validEmail && validPassword && validSurname) {
            setValidForm(true);
        } else {
            setValidForm(false);
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'green',
            borderStyle: 'dashed',
            height: '100vh'
        }}>
            <MyField validationField={validation.name} label='Name' validationForm={validationForm} type='text'/>
            <MyField validationField={validation.name} label='Surname' validationForm={validationForm} type='text'/>
            <MyField validationField={validation.email} label='Email' validationForm={validationForm} type='email'/>
            <MyField validationField={validation.password} label='Pass' validationForm={validationForm}
                     type='password'/>
            <div>
                <button disabled={!validForm}>Отправить</button>
            </div>
        </div>
    );
}

function MyField(props) {
    const [validationMessage, setValidationMessage] = useState('');
    const [value, setValue] = useState('');

    function onChange(e) {
        setValue(e.target.value);
        const validateField = props.validationField(e.target.value);
        props.validationForm(props.label, validateField);
        if (validateField) {
            setValidationMessage('');
        } else {
            setValidationMessage("Incorrect value.");
        }
    }

    return (
        <div>
            <label>{props.label}</label><br/>
            <input type={props.type} onChange={onChange} value={value}/><br/>
            <label style={{color: 'red'}}>{validationMessage}</label>
        </div>
    );
}

const validation = {
    email: function (email) {
        const reg = /\S+@\S+\.\S+$/;
        return reg.test(email);
    },
    password: function (password) {
        const reg = /^(?=.*[A-Z])(?=.*\d).{6,10}$/;
        return reg.test(password);
    },
    name: function (name) {
        const reg = /^[A-Za-z]{2,}$/;
        return reg.test(name);
    }
}
export let Form = MyForm