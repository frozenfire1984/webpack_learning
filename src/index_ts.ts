/*
/!*
type User_type = {
    name: string,
    last_name: string
    age: number
}

function toStr(obj: User_type):string {
    return `${obj.name} ${obj.last_name}, age: ${obj.age}`
}

const user:User_type = {
    name: "John",
    last_name: "Jones",
    age: 30,
}

console.log(toStr(user))*!/
/*
function htmlOutput(flag: boolean):any {
    if (flag) {
        return function (constructorFn: Function) {
            constructorFn.prototype.showHtml = function (css_class: string = "") {
                const output_tag = document.createElement("div")
                css_class.length ? output_tag.classList.add(css_class) : null
                output_tag.innerHTML = JSON.stringify(this)
                document.body.appendChild(output_tag)

                Object.defineProperty(this, "id", {
                    enumerable: false,
                    configurable: false,
                    writable: false
                })

                Object.defineProperty(this, "showHtml", {
                    enumerable: false,
                    configurable: false,
                    writable: false
                })
            }
        }
    }
    return
}

/!*function logName(target: any, propName: string | Symbol) {
    console.log(target)
    console.log(propName)
}*!/

function logMethod(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptor)
}

@htmlOutput(true)
class User {
    id: number;
    name: string;
    age: number;
    job: string

    constructor(id: any, name: string, age: number, job: string) {
        this.id = id
        this.name = name
        this.age = age
        this.job = job
    }

    @logMethod
    getFullInfo():string {
        return `name: ${this.name}, age: ${this.age}, job: ${this.job}`
    }

    get userName():string {
        return this.name
    }
}

let user: any = new User(1, "John Jones", 30, "fighter")
user.showHtml("test")
let user2: any = new User(2, "Daniel Cormier", 40, "fighter")
user2.showHtml()
let user3: any = new User(3, "Dana White", 50, "director")
user3.showHtml("foo")
let user4: any = new User(4, "Joe Rogan", 50, "interviewer")

for (let prop in user) {
    console.log(`${prop}: ${typeof user[prop] === "symbol" ? user[prop].description : user[prop]}`)
}


*/
