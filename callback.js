const fnc1 =function (data) {
    const result3 = data * data;   
    return result3; // 100
}

const fnc2 =function (data,fnc) { // 20 , fnc1
    const result2 = data /2;   //  10 
    return fnc(result2); //fnc1(10)
}

const fnc3 = function (data,fnc) {
    const result1  = data * 5;
    return fnc(result1,fnc1) //fnc2(20,fnc1)
}

let finalResult = fnc3(4,fnc2)

console.log(finalResult)

/* fnc3 실행 = >  뒤에 fnc2 호출  =>*/

/*  ()=>{
      ()=>{
            ()=>{
                 ()={

                 }
            }
    }
 } */
