import Singleton from './Singleton';

let a = Singleton.getInstance();
let b = Singleton.getInstance();

console.log("Es a igual que b? ", a == b);