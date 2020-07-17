// VARIABLES
var outputScreen = document.querySelector('.output')
var inputScreen = document.querySelector('.input')

// FUNCTIONS

// CLR button
clearScreen = () => {
	outputScreen.value = ''
	inputScreen.value = ''
}
// DEL button
deleteInput = () => {
	let op = inputScreen.value
	let oldLength = op.length

	if (oldLength > 0) {
		const newLength = op.substring(0, (oldLength-1))
		inputScreen.value=newLength
	}
}

// NUMBERS
nine = () => {
	inputScreen.value += 9
}
eight = () => {
	inputScreen.value += 8
}
seven = () => {
	inputScreen.value += 7
}
six = () => {
	inputScreen.value += 6
}
five = () => {
	inputScreen.value += 5
}
four = () => {
	inputScreen.value += 4
}
three = () => {
	inputScreen.value += 3
}
two = () => {
	inputScreen.value += 2
}
one = () => {
	inputScreen.value += 1
}
zero = () => {
	inputScreen.value += 0
}
point = () => {
	inputScreen.value += '.'
}

// OPERATORS
divide = () => {
	if (inputScreen.value.length !== 0)
		inputScreen.value += '/'
}
multiply = () => {
	if (inputScreen.value.length !== 0)
		inputScreen.value += '*'
}
subtract = () => {
	inputScreen.value += '-'
}
add = () => {
	if (inputScreen.value.length !== 0)
		inputScreen.value += '+'
}

// ANSWER
compute = () => {
	if (inputScreen.value.length !== 0) {
		let ans= eval(inputScreen.value)
		outputScreen.value = ans
	}
}
