

export const addUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const findUser = users.find(user => user.email === newUser.email);
    if(findUser) return false
    else {
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        return true;
    }
}

export const authUser = (user) => {
    console.log(user)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let findUser = false;
    users.forEach(u => {
        if(u.email === user.email && u.password === user.password) {
            findUser = true;
        }
    });
    if(findUser) {
        sessionStorage.setItem("authorizedUser", JSON.stringify({email:user.email}))
        return true
    } return false
}