
/**
 * 
 * @param {any} arr2d 
 * @param {any} filename 
 */
let csvDownload = (arr2d, filename) => {
    let eol = String.fromCharCode(13) + String.fromCharCode(10);
    let content = ``;
    for(let row of arr2d) {
      //console.log(row);
      for(let col of row) {
        if(col?.[0]) col = col.length && col.includes(',') ? `"${col}"` : col;
        //console.log(col);
        content+=`${col},`;
      }
      content.slice(0,-1);
      content += eol;
    }
    
    var blob = new Blob([content], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };
  

  
    
    /**
     * 
     * @param {any} text 
     * @param {any} filename 
     */
    let download = (text, filename) => {
      var blob = new Blob([text], { type: "text/plain" });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
    };
    
    /**
     * 
     * @param {any} fileObj 
     * @param {any} callback 
     */
    let read = (fileObj, callback) => {
      let reader = new FileReader();
      reader.readAsText(fileObj);
      reader.onload = () => {
        callback(reader.result);
      };
    };
  
    
    /**
     * 
     * @param {any} fileBlob 
     * @returns 
     */
    let upload=async(fileBlob)=>{
      try {
          let res = await readFileAsync(fileBlob);
          return res;
      } catch(err) {
          console.log(err);
          return '';
      }
    };
  
    /**
     * 
     * @param {any} file 
     * @returns 
     */
    let readFileAsync=(file)=> {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
    
        reader.onload = () => {
          resolve(reader.result);
        };
    
        reader.onerror = reject;
    
        reader.readAsText(file,'utf-8');
      })
    }
  
    
    /**
     * 
     * @param {any} txt 
     * @returns 
     */
    let csvProcess = (txt) => {
      let data = csvToArray(txt);
    
      let out = [];
     
      for (let row = 1; row < data.length; row++) {
        /** @type {any} */
        let obj = {};
        for (let col=0;col<data[0].length;col++) {
          obj[data[0][col]] = data[row][col] && data[0][col] ? data[row][col] : null ;
        }
        out.push(obj);
      }
      return out;
    };
  
    
    //https://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
    //2d array from csv file
    /**
     * 
     * @param {any} text 
     * @returns 
     */
    let csvToArray=(text)=>{
      let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
      for (l of text) {
          if ('"' === l) {
              if (s && l === p) row[i] += l;
              s = !s;
          } else if (',' === l && s) l = row[++i] = '';
          else if ('\n' === l && s) {
              if ('\r' === p) row[i] = row[i].slice(0, -1);
              row = ret[++r] = [l = '']; i = 0;
          } else row[i] += l;
          p = l;
      }
      return ret;
  };
    
    export { read,readFileAsync,csvProcess, download, csvDownload, csvToArray,upload };