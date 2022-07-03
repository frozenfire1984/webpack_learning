/******************************************************/
/** *babel start***/

async function start() {
	return await Promise.resolve('async is worked');
}

start()
	.then(data => {
		console.log(data);
	});

/* class Util {
	static id = Date.now()
}

console.log(Util.id)

const obj = {
	name: "John",
	lastName: "Sina",
	addData: {
		position: "fighter",
		age: 30,
		status: "active"
	}
}

const age = obj.addData?.age
console.log(age)
//const foo = obj.addData.foo
console.log(obj?.foo?.bar?.lorem)

fetch("https://jsonplaceholder.typicode.com/todos/")
.then(resp => {
	return resp.json()
})
.then(data => {
	console.log(data)
})
.catch(err => {
	console.log(err)
})
.finally(() => {
	console.log("finally")
})
const pr1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("time out 1")
	}, 2000)
})

async function func() {
	await pr1.then(data => {
		console.log(data)
	})

	console.log("all func end")
}

func()

class Test {
	constructor(str) {
		this.name = str
	}

	static getDate() {
		return new Date()
	}
}

console.log(Test.getDate())

const x = 2

let a = do {
	if (x > 10) {
		("big");
	} else {
		("small");
	}
};

console.log(a) */

/** *babel end***/
/******************************************************/
