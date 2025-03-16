import { useRef } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {

    const userNameRef = useRef<HTMLInputElement | any>(null);
    const passwordRef = useRef<HTMLInputElement | any>(null);
    const navigate = useNavigate();

    async function signin() {
        const username = userNameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert('Please fill in the required fields');
            return;
        }

        await axios.post(BACKEND_URL + '/api/v1/signin', { username, password }).then((response) => {
            console.log(response.data);

            const token = response.data.data.token;
            console.log(token);
            
            //storing token in local storage
            localStorage.setItem('token', token);
            console.log(localStorage.getItem('token'));

            alert("You have Signed In Successfully");

            // Redirect to Dashboard
            navigate('/');
        }
        ).catch((error) => {
            console.log(error);
            alert("An error occurred. Please try again later.");
        }); 

        console.log('Sign In', username, password);
    }

    return <div className="flex justify-center items-center align-middle w-screen h-screen bg-gray-200">
        <div className="w-1/4 h-2/5 bg-primarywhite rounded-xl flex flex-col justify-center align-middle px-4 gap-2">
            <Input placeholder="Username" onChange={ () => {} } type="text" required={true} reference={userNameRef} />

            <Input placeholder="Password" onChange={ () => {} } type="password" required={true} reference={passwordRef} />

            <Button variant="primary" size="md" content="Sign In" onClick={ signin } />
        </div>
    </div>
}







// import { useState } from "react";
// import { Input } from "../components/ui/Input";
// import { Button } from "../components/ui/Button";

// export function Signin() {

//     const [username, setUsername] = useState<string>('');
//     const [password, setPassword] = useState<string>('');

//     return <div className="flex justify-center items-center align-middle w-screen h-screen bg-gray-200">
//         <div className="w-1/4 h-2/5 bg-primarywhite rounded-xl flex flex-col justify-center align-middle px-4 gap-2">
//             <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" required={true} />

//             <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required={true} />

//             <Button variant="primary" size="md" content="Sign In" onClick={() => console.log('Sign In')} />
//         </div>
//     </div>
// }