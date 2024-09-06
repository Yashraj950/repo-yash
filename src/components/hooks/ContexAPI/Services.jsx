import {  useBioContext } from ".";

export const Services = () => {

  const {myName,myAge} =   useBioContext()
    return (
        <section className ={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-purple-600`} >
<h1>Hello ContexAPI(Services). My Name is {myName},I am {myAge} yrs old. </h1>
      
        </section>
    );
    
};    