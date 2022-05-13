
// დავალება 4: თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if(user.age>18 && user.studentstatus=='active'){
     console.log('hello');
}

else if(user.name=='levani'){
     console.log('Hello Giorgi');
}
else if(user.studentstatus== 'active' || user.age<25){
    console.log('Hello World');
}
else{
     console.log(('Error'));
}
