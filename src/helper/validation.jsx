import { useNavigate } from "react-router-dom"
import { showToast } from "../components/modules/AuthModules/Toastify"


// const navigate = useNavigate()




export const Login = async ({ values }) => {

    let isemailOK = true
    let isPassOK = true

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if(!(emailRegex.test(values.email))) {
        isemailOK = false
        showToast('لطفا از درست بودن ایمیل خود اطمینان حاصل کنید.', 'error');
    } else {
        isemailOK = true
    }
    if(values.password.length > 32 || values.password.length === 0) {
        isPassOK = false
        showToast('رمز عبور نمیتواند خالی یا بیشتر از 32 نویسه باشد.', 'error');
    } else {
        isPassOK = true
    }

    if(isemailOK && isPassOK){
        const response = await fetch('http://localhost:3001/login', {
            method:"POST",
            headers:{ "Content-type": "application/json" },
            body: JSON.stringify({values}),
        });
        const loginResult = await response.json();
        if(loginResult.statusCode === 200){
            // window.URL("/dashboard")
        }
        }else{
            console.log("didnt");
        }
}