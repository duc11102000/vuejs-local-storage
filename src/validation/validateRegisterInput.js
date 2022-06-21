import validator from 'validator';

const validateRegisterInput = (data) => {
    let errors = {}

    const {username, password, password2, email, fullName, address} = data

    if (localStorage.users) {
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        let index = lsUsers.findIndex((user) => user.username === username);
        if (index > -1) {
          errors.username = "Username already exists!";
        }
      }

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

    if(!validator.isEmail(email)) {
        errors.email = 'Please enter valid email';
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