//Week 1 - Project 1

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).

	console.log("Jeremy")

//2. Declare a variable called name, log it to the console.
	
	var x = 'name';
	console.log(x)

//3. Declare two variables with number values. Add, subtract, multiply and divide them.

	var y = 12;
	var z = 3;

	console.log(y + z)
	console.log(y - z)
	console.log(y / z)
	console.log(y * z)

//4. Declare two variables with string values. Create a third variable that concatenates them.

	var work = 'Broadnet';
	var location = 'Highlands Ranch';
	var answer = 'I work at ' + work + ' located in ' + location '.';
	document.getElementByID("question4").innerHTML = answer;

//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.

	"5" + "3"
	53

	// Adding string together concatenates the numbers

	"5" - "3"
	2

	"5" * "3"
	15

	"5" / "3"
	1.6666666666666667

	// All other math operations work as expected with numerals in a string

//6. Create a prompt that asks a user to pick a number. Double the answer.

	var number = prompt("Please pick a number.")
	console.log(number * 2)

//7. Create a custom alert.
	
	window.alert("I am an alert")
 
//8. Declare three variables called length, width and height. Calculate area and volume.

	var length = '34';
	var width = '12';
	var height = '5';

	console.log(length * width * height)
	2040

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."

	var name = prompt("What is your name?")
	var age = prompt("How old are you?")
	var city = prompt("Where do you live?")

	confirm('My name is ' + name + '.' + ' I am ' + age + ' years old, and I live in ' + city)

//10. Create an alert that uses the response from a prompt.

	var response = prompt('What is your favorite animal?')
	alert('Your favorite animal is a ' + response + '.')
