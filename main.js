function logger(log){
    console.log(log)    // Declaration funtion
}
logger()

const logger = function (log){
    console.log(log)        // Expression funtion
}
logger()

const logger = (log) =>{
    console.log(log)        // arrow funtion
}
logger()


//  vd arrow funtion
const sum = (a,b) =>{
    a + b ;
}
console.log(sum(2 , 2));









//  enhanced object literals
//  1.định nghĩa key : value cho object
// 2.định nghĩa method cho object
// 3. định nghĩa key cho object dưới dạng biến

var name ='javascript';
var price =1000 ;
var course ={
    name,
    price  ,    // dinh nghia key cho object

    getName(){
        return name ;    // dinh nghia method cho object
    }
}
console.log(course.getName())



var fielName = 'name' ;
var fielPrice = 'price' ;
const course ={
    [fielName]:"javascript" ,   // định nghĩa key dưới dạng biến
    [fielPrice] : 1000 
}
console.log(course)





//  destructuring
var array =['javascript' , 'php' , 'nodejs'];
 var [a , b, c]= array ;
 console.log(a,b,c)




 var course ={
    name :"javascript",
    price : 1000 ,
    children:{
        name:'reactJs'
    }
 };
 var {name: parentName , price , children:{name: childrenName}} = course ;
 console.log(parentName)
 console.log(childrenName)



//   rest parameters
var array =['javascript' , 'php' , 'nodejs'];
var [a,...rest] = array
console.log(a);
console.log(rest);





var course ={
    name :"javascript",
    price : 1000 
 };
 var {name, ...rest} = course ;
 console.log(name)
 console.log(rest)




//  spread 
  var array1 =['javascript' , 'nodejs','php']
  var array2 =['vuejs' ,'reactjs']
  var array3 =[...array2,...array1]       //spread vowis array
  console.log(array3)





  var object1={
    name:"javascript"
  }
  var object2={
    price:1000
  }
  var object3={         // spread vs object
    ...object1,
    ...object2
  }
  console.log(object3)




  var defaultConfig={
    api :'https://domain-trang-khoa-hoc',
    apiVersion:'v1',
    other: ' ohter'
  }
  var exerciseConfig={                      // spread giúp nối các phần object và ghi đè các phần giống nhau
    ...defaultConfig,
    api:'https://domain-trang-bai-tap'
  }



  var array =['javascript' , 'php','nodejs']
  function logger(...rest){
    for(var i=0 ; i<rest.length ; i++){      
        console.log(rest[i]);
    }
  }
  logger(...array)





  //  modules

  import logger,{
    TYPE_LOG,
    TYPE_ERROR,
    TYPE_WARN
  } from './logger.js';

  logger('test message ....', TYPE_ERROR)






  import{
    TYPE_ERROR,
    TYPE_LOG,
    TYPE_WARN
  }from './constan.js'