function boolToWord( bool ){
	if (typeof bool !== "boolean") {
		return "is no boolean"
	}
	return bool ? "Yes" : "No"
}

//console.log(pow(2, 1.2))
console.log(boolToWord(true))