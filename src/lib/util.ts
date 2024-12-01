 /**
   * @returns {string}
   */
 export const getDateTime=() : string =>{
    const x = new Date();
    const y = x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
  
  
    return y+" "+x.toTimeString().substring(0,5);
          
  };

   /**
   * @returns {string}
   */
   export const getDate=():string =>{
    const x = new Date();
  
    const y = x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
    return `${y}`;        
  };