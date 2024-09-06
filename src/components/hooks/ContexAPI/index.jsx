import { createContext, use } from "react";

//  1 step
export const BioContext =createContext();

 //2 step

 export  const BioPovider = ({children}) => {
    const myName = "Raushani";
    const myAge = 18;

    return(
       <BioContext.Provider  value={{myName:myName,myAge:myAge}}>{children}</BioContext.Provider>
   
   );
 };


//custom hooks

export const useBioContext = () => {
   const context = use(BioContext);
   if(context===undefined) {
      throw new Error("Raushani Component must be wrapped with BioProvider " );
   }
   return context;
}