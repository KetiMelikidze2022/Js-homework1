//6. მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for(let y of array){
    for(let x of y){
        if(x>0){
            console.log(x);
        }
    }
}