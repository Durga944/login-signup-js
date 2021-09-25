const fs = require("fs");

// const path = "userdetails.json"

// var writefilesync=(filename,data)=>{
    
//     return new Promise((resolve,reject)=>{
     
//       let result1=JSON.stringify(data,null,2)
//       fs.writeFileSync(filename,result1,'utf8')
//       resolve(data)
//     })
//   }
  
  

//   let readfilesync=(Filename)=>{
    
//     return new Promise((resolve,reject)=>{
//       var result2 =fs.readFileSync(Filename,'utf8');
    
//       result1=JSON.parse(result2)
//       resolve(result1)
//     })
//   }

// writefilesync(path).then((dta)=>{
//     console.log(dta);
// }).catch((err)=>{
//     console.log(err);
// })

// readfilesync(path).then((getData)=>{
//     console.log(getData);
// }).catch((err)=>{
//     console.log(err);
// })

const getData = (fileName, type) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, type, (err, data) => {
      
      return err ? reject(err) : resolve(data);
    })
  );

getData('file.json', 'utf8')
  .then(data => console.log('Data: ', data))
  .catch(error => console.log('Error: ', error));