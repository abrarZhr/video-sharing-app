export const LoginStart = (userCredentials) => ({
    type:"LOGIN_START"
})

export const loginSuccess = (user) =>({
    type: "LOGIN_SUCCESS",
    payload :user ,
});

export const LoginFailure =()=>({
    type:"LOGIN_FAILURE"
}) 