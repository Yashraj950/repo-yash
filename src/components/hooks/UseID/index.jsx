import { useId } from "react";

export const UseID = () => {
    const id = useId();
   
    return(
        <form >
            <div>
                <label htmlFor={id+ "usernameId"}>Username:</label>
                <input type="text"  id={ id+"usernameId"} name="name" />
            </div>
            <div>
                <label htmlFor={id + "passwordId"}>Password:</label>
                <input type="password"  id={id + "passwordId"} name="password" />
            </div>
            <div>
                <label htmlFor={id +  "emailId"} >Email:</label>
                <input type="email" name="email" id={id +  "emailId"} />
            </div>
            
                <button type="submit">Submit</button>
            
        </form>
    );
};