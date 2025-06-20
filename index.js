let a = 20;
let b = 21.8;
let c = "abisheck"
let d = true;
let e = 123456788;
console.log(a);
a = 10;
 b = 10;
 let f = a+b;
 let g = a-b;
 let h = a*b;
 let i = a/b;
 let j = a**b;
 console.log(f!=g);
 console.log(f||g);
 console.log(a==b);

 if (a==b) {
    console.log("a and b are equal");
 }   
else {
    console.log("a is not equal to b");
}
 

if(a%2==0){
    console.log("even");

}
else{
    console.log("odd");
}



for(let a=2 ; a<20; a++){
    console.log(a);
}




let x=1;
let y=2;
function add(x,y){
    return x+y;
}
console.log(add(x,y))
d="hi!!"
function name(d){
    return d+" welcome";
}
console.log(name(d));

let num = [1,2,3,4,5]


let num1 = num.reduce((a1, b1) => a1+b1,0);
console.log(num1);


let mapp = num.map(a => a*a);
console.log(mapp);


let fil = num.filter(a => a%2 == 0);
console.log(fil);


let std1 = "vimal";
let std2 = "vignesh";
let std3 = "vishnu";
let std4 = "venkatachlam";
let std1_mark = [90,98,97,95,100];
let std2_mark = [96,80,87,95,100];
let std3_mark = [89,77,87,88,100];
let std4_mark = [77,88,66,77,100];
let std1t = std1_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 1 total : ",std1t);
let std2t = std2_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 2 total : ",std2t);
let std3t = std3_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 3 total : ",std3t);
let std4t = std4_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 4 total : ",std4t);
let arr = [std1t,std2t,std3t,std4t];
let filt = arr.filter(arr => arr>450) ;
console.log("mark more than 450 : ",filt);



let sett = new Set([0,0,9,8,7,7,76,56,6]);
console.log(sett);
console.log(sett.add(99));
console.log(sett.clear(9));
console.log("Hello");
setTimeout(()=> {
console.log("world");},10000);
console.log("Hello");
console.log("Numbers: ");
let nu =10;
setInterval(() => {
    for (let i = 1; i<nu;i++)
    console.log("num : ", i)
},1000)