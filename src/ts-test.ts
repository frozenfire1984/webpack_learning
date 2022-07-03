type User_type = {
	name: string,
	last_name: string,
	age: number,
}

function toStr(obj: User_type): string {
	return `${obj.name} ${obj.last_name}, age: ${obj.age}`;
}

const user: User_type = {
	name: "John",
	last_name: 'Jones',
	age: 25,
};

console.log(toStr(user));
