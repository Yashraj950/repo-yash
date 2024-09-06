import {  useBioContext } from ".";

export const Home = () => {

  const {myName,myAge} =   useBioContext();
    return (
        <section className ={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-pink-600`} >

    <h1>Hello ContexAPI. My Name is {myName},I am {myAge} yrs old. </h1>
      
        </section>
    )
   
};