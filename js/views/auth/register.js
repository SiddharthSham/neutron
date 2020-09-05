const passwordCheck = () => {
    const sbutton = document.getElementById('submit-register')
    const pword = document.getElementById("Pword").value;
    const cpword = document.getElementById("cPword").value;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    const check = () => {
        if (!strongRegex.test(pword)) {
            alert('pasword should contain 1 number 1 special 1 upper case charecter 1 lowercase charecter and 8 letter long');
            return false
        }
        if (cpword != pword) {
            alert("password not equal to confirmed password")
            return false;
        }
        return true
    }

    sbutton.addEventListener('click', e => {
        e.preventDefault()
        check()
    })
}


export {
    passwordCheck
}