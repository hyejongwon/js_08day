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

console.log(finalResult) //100

/* fnc3 실행 = >  뒤에 fnc2 호출  =>*/

/*  ()=>{
      ()=>{
            ()=>{
                 ()={

                 }
            }
    }

    ()=>()=>()=>()=>
    promise 는 순서대로 진행 할 수 있도록  
    원활한 진행을 위해 만들어졌다 (가독성 좋게)
    프로미스는 생성자 함수 입니다. 
    new Promise(a,b) 
    resolve,reject => success / fail 
    생성자 이기 때문에 변수에 할당한다.
    임의의 함수를 만들어서 그 함수 내부에서 사용할 수 있도록 해준다. 

  */
