import { useRef } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const userNameRef = useRef<HTMLInputElement | any>(null);
    const passwordRef = useRef<HTMLInputElement | any>(null);
    const navigate = useNavigate();

    async function signup() {
        const username = userNameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert('Please fill in the required fields');
            return;
        }

        await axios.post(BACKEND_URL + '/api/v1/signup', { username, password }).then((response) => {
            console.log(response.data);
            alert("You have Signed Up Successfully");
            // Redirect to Sign In
            navigate('/signin');
        }
        ).catch((error) => {
            console.log(error);
            alert("An error occurred. Please try again later.");
        }); 

        console.log('Sign Up', username, password);
    }

    return <div className="flex justify-center items-center align-middle w-screen h-screen bg-gray-200">
        <div className="w-1/4 h-2/5 bg-primarywhite rounded-xl flex flex-col justify-center align-middle px-4 gap-2">
            <Input placeholder="Username" onChange={ () => {} } type="text" required={true} reference={userNameRef} />

            <Input placeholder="Password" onChange={ () => {} } type="password" required={true} reference={passwordRef} />

            <Button variant="primary" size="md" content="Sign Up" onClick={ signup } />
        </div>
    </div>
}