const obj = {
  name : 'Abhishek',
  title : 'Vishvakarma',
  age : 23
};
// Call method...

function Call(){
  return obj;
}

console.log(Call.call(obj));

// Apply Method...

function Apply(ios, andro){
  return [ios, andro];
};

console.log(Apply.apply(obj,['I-phone 16', 'Samsung']));

function Bind(){
  return obj;
}

console.log(Bind.bind(obj)());