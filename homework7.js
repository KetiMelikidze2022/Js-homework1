//7. მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიც 5-ის ჯერადია

let array = [32, 10, 'hello', null, 'hello2', 50]

for (let K = 0; K < array.length; K++) {
    const element = array[K];

    if (typeof element === 'number' && element % 5 === 0) {
        console.log(element);
    }

}

  