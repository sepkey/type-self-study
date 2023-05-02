function calculateTotalPrice(
  product: { name: string; unitPrice: number },
  quantity: number,
  discount: number
) {
  const priceWithoutDiscount = product.unitPrice * quantity;
  const discountAmount = priceWithoutDiscount * discount;
  return priceWithoutDiscount - discountAmount;
}

//////#fff using basic TS types
// let today = new Date(); //type Date exist in ts//no annotation//inference

//escape hatch in TypeScript’s type system.=> no infer with value no annotate
//data => any  soooo no type chacking occures
//fetch("https://swapi.dev/api/people/1")
// .then((response) => response.json())
// .then((data) => {
// console.log("firstName", data.name);
// });

// The unknown type is the opposite of the any type, as it contains nothing within its type. A
// type that doesn’t contain anything may seem useless. However, a variable’s type can be widened
// if cheks are made to allow TypeScript to widen it.

///if void  is the return type, you can't return undefined instead, because undefined is still a kind of value.  the function is
// expected to return a value
//function logText(text: string):undefined {
// console.log(text);
// }

//if you put break, it doesn't return never type anymore
// function foreverTask(taskName: string): never {
//   while (true) {
//   console.log(`Doing ${taskName} over and over again
//   ...`);
//   break
//   }
//   }

//// TypeScript is unable to infer the never type

// • TypeScript adds many useful types to JavaScripts types, such as Date, and is capable of
// representing arrays.
// • TypeScript can infer a variable’s type from its assigned value. A type annotation can be used
// where type inference doesn’t give the desired type.
// • No type checking occurs on variables with the any type, so this type should be avoided.
// • The unknown type is a strongly-typed alternative to any, but unknown variables must be
// widened to be interacted with.
// • void is a return type for a function that doesn’t return a value.
// • The never type can be used to mark unreachable areas of code.
// • Array types can be defined using square brackets after the array item type

/////////#fff creating TS types
//1
//object types => like object literals but properties value are type

// function addNumbers({ a, b }: { a: number; b: number }) {}

//type inference works nicely on object types
//let table = {name: "Table", unitPrice: 450};

//optional property => with ?

//variables in ts => type aliases

// type aliases are extendable  like: we call DiscountedProduct as intersection type
// type DiscountedProduct = Product & { discount: number };

//2
//object types=> interface we can extend it with extends keyword

//1-2  compare
//when should I use a type alias instead of an interface and vice versa? The
// capabilities of type aliases and interfaces for creating object types are very similar – so the simple
// answer is that it is down to preference for object types. Type aliases can create types that interfaces
// can’t, though, such as union types

///هر وقت بخوایم  که اندیفایند هم مقداری باشه از اپشنال استفاده میکنیم

//first approach to stop raising error => optional ?
// class Product {
// name?:string;
// unitPrice?:number;
// }

//second approach to stop raising error => assign initial value
// class Product {
// name="";
// unitPrice=0;
// }

//third approach constructor
// class Product {

//     constructor(name:string, unitPrice:number){
//         this.name=name;
//         this.unitPrice=unitPrice
//     }

// }

// class Product {
//     name;
//     unitPrice;
//     constructor(name:string, unitPrice:number){
//         this.name=name;
//         this.unitPrice=unitPrice
//     }

// }
//TypeScript will automatically create properties for constructor parameters that are marked
// as public.
// class Product {

//     constructor(public name:string,public unitPrice:number){
//         this.name=name;
//         this.unitPrice=unitPrice
//     }

// }

// class Product {
//   constructor(public name:string, public unitPrice:number){
//       this.name=name;
//       this.unitPrice=unitPrice;
//   }

//   getDiscount(discount:number):number{
//       return this.unitPrice-discount
//   }
// }

// const proIns =new Product("stockings",12)
// console.log(proIns.getDiscount(3))

// // In summary, class properties can be given a type in a constructor or by assigning a default value. Class
// // methods can be strongly-typed just like regular JavaScript functions

//////#f45e90 string-based
///enumerations
////enumerations are a way of representing a range of values with user-friendly names
///They are zero-based numbers by default and not as type-safe as we would like. However, we can make enumerations string-based, which is more type-safe

///union
// Like enumerations, union types can represent a range of values.

//enum vs union
//A string union type is the simplest approach if the strings are meaningful. If the strings aren’t meaningful, then a string enumeration can be used to make them readable.
