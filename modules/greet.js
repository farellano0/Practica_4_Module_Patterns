//console.log('Hello from the module'); //Se manda a llamar en la consola el texto que esta entre comillas simples.

//Se convierte el mensaje de saluda a una función mediante un function expression.
let greet = () => console.log('Hello from the module');
module.exports = greet; // El module.exports permite a app.js pueda tener acceso a la función definida