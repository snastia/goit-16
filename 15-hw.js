// 1

class Animal {
    constructor({name, age}){
        this.#name = name
        this.#age = age
    }
    #name
    #age

    getAge(){
        console.log(this.#age)
    }
}

const dog = new Animal({
  name: "Bobik",
  age: "5",
})

dog.getAge()

// 2

class Dog extends Animal{
    static legsCount = 4
    bark(){
        console.log("Woof!") 
    }
}

const animal = new Dog({
   legsCount: 4,
})

animal.bark()

// 3

class GuideDog extends Dog{
    constructor(isTrained, name, age){
        super(name, age)
        this.name = name
        this.age = age
        this.#isTrained = isTrained
    }

    #isTrained

    leadBlind() {
        if(this.#isTrained === true){
        console.log("Following the guide dog")
        } else{
          console.log("The dog is not trained") 
        }
      }
    getInfo(){
        console.log(`Name: ${this.name}, age: ${this.age}, trained: ${this.#isTrained}`)
    }
}

const guide = new GuideDog("yes", "Barsik", 8)

guide.leadBlind()
guide.getInfo()
guide.leadBlind()

// 5

