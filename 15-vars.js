// класи(продовження), наслідування класів


// публічні і приватні 

// class User {
//     constructor({name, email}) {
//     this.name = name
//     this.#email = email
// }
//     name
//     #email


//     changeEmail(newEmail){
//       this.#email = newEmail
//     }
//     getEmail() {
//     return this.#email;

// }
// }

// const mango = new User({
//     name: "Mango",
//     email: "mmm@gmail.com",
// })

// mango.changeEmail("kkk@gmail.com")
// console.log(mango.#email)


// статичні (власті) властивості

// class User {
//     static Roles = {
//         ADMIN: "admin",
//         EDITOR: "editor",
//     }

//     #email
//     #role

//     constructor({email, role}) {
//         this.#email = email
//         this.#role = role
//     }

//     get role() {
//         return this.#role
//     }

//     set role(newRole) {
//         this.#role = newRole
//     }
// }

// const mango = new User({
//     email: "mango@gmail.com",
//     role: User.Roles.ADMIN,
// })

// console.log(mango.role)


// перевіряємо, чи є така пошта чи ні ( задачка просто )

// class User {
//     static #takenEmails = []

//     static isEmailTaken(email){
//         return User.#takenEmails.includes(email)
//     }

//     #email

//     constructor({email}) {
//         this.#email = email
//         User.#takenEmails.push(email)
//     }
// }

// const mango = new User ({email: "mmm@gmail.com"})

// console.log(User.isEmailTaken("mmm@gmail.com"))

// наслідування

// class User {
//     #email
//     constructor(email) {
//         this.#email = email
//     }
//     get email () {
//         return this.#email
//     }
//     set email(newEmail) {
//         this.#email = newEmail
//     }
// }

// class ContentEditor extends User {

// }

// const editor = new ContentEditor("mango@gmail.com")
// console.log(editor.email)


// задачки

// class Animal {
//     constructor(name){
//         this.name = name
//     }
// }

// class Dog extends Animal{
//     constructor(breed){
//         super(breed)
//         this.breed = breed
//     }
// }

// const myDog = new Dog("Buddy", "Labrador Retriever")
// console.log(myDog)



// class Animal {
//     makeSound(){

//     }
// }

// class Cat extends Animal{
//     makeSound(){
//         console.log("мяу");
//     }
// }

// const cat1 = new Cat();
// cat1.makeSound();


// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     speak(){
//         return "sound"
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//         this.name = name
//     }
//     speak(){
//         return "Bark!"
//     }
// }

// const dog1 = new Dog("bobik")
// console.log(dog1.speak())



// class Product {
//     constructor(name, price, discount){
//         this.name = name
//         this.price = price
//         this.discount = discount
//     }
//     getDiscountPrice(){
//         if (this.discount > 0) {
//              return this.price * (1 - this.discount / 100)
//         } else {
//            return this.price
//         }
//     }
// }

// const product = new Product("apple", 30, 5)
// console.log(product.getDiscountPrice())

// class Shape{
//     constructor(color){
//         this.color = color
//     }
//     draw(){

//     }
// }

// class Circle extends Shape {
//     constructor(radius, color){
//         super(color)
//         this.radius = radius
//     }
//     draw(){
//        return `Circle radius: ${this.radius}, circle color: ${this.color}`
//     }
// }

// const myCircle = new Circle(5, "red")

// console.log(myCircle.draw())

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person{
//     constructor(name, age, position){
//         super(name, age);
//         this.position = position;
//     }
// }

// const person1 = new Employee("name", "age", "position")
// console.log(person1)



// class Book{
//     constructor(title, author, price){
//         this.title = title
//         this.author = author
//         this.price = price
//     }
// }

// class Bookstore{
//     constructor(){
//         this.books = []
//     }
//     addBook(book){
//        this.books.push(book)
//     }
//     removeBook(book){
//        const index = this.books.indexOf(book)
//        if(index != -1){
//           this.books.splice(index, 1)
//        }
//     }
//     listBooks(){
//        for(let index = 0; index < this.books.length; index++){
//          const book = this.books[index]
//          console.log(book)
//        }
//     }
// }

// const book1 = new Bookstore("книга1", "sara", "20$")
// const book2 = new Bookstore("книга1", "sara", "20$")
// const bookStore = new Bookstore()
// bookStore.addBook(book1)
// bookStore.addBook(book2)