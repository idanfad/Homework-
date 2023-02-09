class UserDetails {
    firstName;
    lastName;
    phoneNumber;
    email;
    userPassword;
    constructor() {
        document.getElementById('createBtn').addEventListener('click', () => {
            this.saveToStorage();
        });

        addEventListener('DOMContentLoaded',()=>{
           let y =  JSON.parse(localStorage.getItem('userBox'));
           document.getElementById('fName').value = y.firstName;
           document.getElementById('lName').value = y.lastName;
           document.getElementById('phoneNum').value = y.phoneNumber;
           document.getElementById('userEmail').value = y.email;
           document.getElementById('userPass').value = y.userPassword;
        });
    }

    saveToStorage() {
        let getFirstName = document.getElementById('fName').value;
        let getLastName = document.getElementById('lName').value;
        let getPhoneNumber = document.getElementById('phoneNum').value;
        let getUserEmail = document.getElementById('userEmail').value;
        let getUserPass = document.getElementById('userPass').value;
       
        this.firstName = getFirstName;
        this.lastName = getLastName;
        this.phoneNumber = getPhoneNumber;
        this.email = getUserEmail;
        this.userPassword = getUserPass;
     
        localStorage.setItem('userBox', JSON.stringify(this));
        console.log('JSON CREATED & SAVED');
     
    }
}

let a = new UserDetails();

