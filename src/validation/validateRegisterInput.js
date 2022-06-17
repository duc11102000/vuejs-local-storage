import validator from 'validator';

const validateRegisterInput = (data) => {
    const errors = {}

    const {username, password, password2, email, fullName, address} = data

    if(validator.isEmpty(username)){
        errors.username = "User name field is required";
    }

    if(validator.isEmpty(password)){
        errors.password = 'Password field is required';
    }

    if(!validator.equals(password, password2)){
        errors.password2 = 'Password should match'
    }

    if(validator.isEmpty(password2)){
        errors.password2 = 'Confirm password field is required';
    }

    if(validator.isEmpty(email)){
        errors.email = 'Email field is required';
    }

    if(validator.isEmpty(fullName)){
        errors.fullName = 'Full name field is required';
    }

    if(validator.isEmpty(address)){
        errors.address = 'Address field is required';
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }
};

export default validateRegisterInput;