import { use } from "react";
import { BioContext} from ".";

export const About = () => {

  // const {myName,myAge} =   use(BioContext)

  const newHook = true;
  let myName, myAge;
  if (newHook) {
    ({myName,myAge}= use(BioContext));
  };
  
    return (
        <section className ={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-blue-700`} >
<h1>Hello ContexAPI(About). My Name is {myName},I am {myAge} yrs old. </h1>
      
        </section>
    );
    
};    