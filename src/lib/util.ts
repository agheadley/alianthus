
export const getDateTime=() : string =>{
  const x = new Date();
  const y = x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
  return y+" "+x.toTimeString().substring(0,5);
        
};

export const getDate=():string =>{
  const x = new Date();
  const y = x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
  return `${y}`;        
};

export const unique = (data:object[],keys:string[]):object[] => {
  const u:object[] = [];
  let track :string[] = [];
  for(const d of data) {
    const x=keys.map(el=>String(d[el]));
    console.log(x);
    if(!u.find(el=>keys.map(k=>String(el[k])))) {
      u.push(d);
    }
  }

  return u;
};