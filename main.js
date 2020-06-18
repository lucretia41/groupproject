// Great Contributors Alex Alea, Tammy Crittenden, Tony Lukowski!!


const parentElement = document.querySelector('.katas-list')
const boxes = document.querySelector('main')

//kata1 // Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)

const kata1Heading = document.createElement('h3')
parentElement.append(kata1Heading)
kata1Heading.append('Kata 1')

let array1 = [];
for (let counter = 1; counter <= 20; counter += 1) {
    array1.push(counter)
}
parentElement.append(array1)

//kata2 Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)

const kata2Heading = document.createElement('h3')
parentElement.append(kata2Heading)
kata2Heading.append('Kata 2')

let array2 = [];
for (let counter2 = 2; counter2 < +20; counter2 += 2) {
    array2.push(counter2)

}
parentElement.append(array2)


//kata3 Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)

let array3 = []
const kata3Heading = document.createElement('h3')
parentElement.append(kata3Heading)
kata3Heading.append('Kata 3')

let counter3 = 1
while (counter3 <= 20) {
    counter3 += 2
    array3.push(counter3)
}
parentElement.append(array3)


//kata4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)

const kata4Heading = document.createElement('h3')
parentElement.append(kata4Heading)
kata4Heading.append('Kata 4')

let array4 = []
let counter4 = 5
while (counter4 <= 100) {
    counter4 += 5

    array4.push(counter4)
}
parentElement.append(array4)

//kata5 Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)


let array5 = []
const kata5Heading = document.createElement('h3')
parentElement.append(kata5Heading)
kata5Heading.append('Kata 5')
let counter5 = 1
while (counter5 <= 100) {
    const counter5IsPerfectSquare = Number.isInteger(Math.sqrt(counter5))
    if (counter5IsPerfectSquare) {}
    counter5 += 1
    array5.push(counter5)
}
parentElement.append(array5)

//kata6 Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)


let array6 = []
const kata6Heading = document.createElement('h3')
parentElement.append(kata6Heading)
kata6Heading.append('Kata 6')

let counter6 = 20
while (counter6 >= 1) {
    counter6 -= 1

    array6.push(counter6)
}
parentElement.append(array6)


//kata7 Display even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)

let array7 = []
const kata7Heading = document.createElement('h3')
parentElement.append(kata7Heading)
kata7Heading.append('Kata 7')

let counter7 = 20
while (counter7 >= 1) {
    counter7 -= 2
    array7.push(counter7)
}
parentElement.append(array7)


//kata8 Display odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)

let array8 = []
const kata8Heading = document.createElement('h3')
parentElement.append(kata8Heading)
kata8Heading.append('Kata 8')

let counter8 = 19
while (counter8 >= 1) {
    counter8 -= 1
    array8.push(counter8)
}
parentElement.append(array8)

//kata9 Display multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)


let array9 = []
const kata9Heading = document.createElement('h3')
parentElement.append(kata9Heading)
kata9Heading.append('Kata 9')

let counter9 = 100
while (counter9 >= 1) {
    counter9 -= 5

    array9.push(counter9)
}
parentElement.append(array9)


//kata10 Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)


let array10 = []
const kata10Heading = document.createElement('h3')
parentElement.append(kata10Heading)
kata10Heading.append('Kata 10')


let counter10 = 100
while (counter10 >= 1) {
    const counter10IsPerfectSquare = Number.isInteger(Math.sqrt(counter10))

    if (counter10IsPerfectSquare) {

    }
    counter10 -= 1
    array10.push(counter10)
}
parentElement.append(array10)


//kata11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)



const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
let array11 = []
const kata11Heading = document.createElement('h3')
parentElement.append(kata11Heading)
kata11Heading.append('Kata 11')

array11.push(sampleArray)

parentElement.append(array11)


//kata12 Display all the even numbers contained in sampleArray. (244, 758, 450, …,    940, 472)

const kata12Heading = document.createElement('h3')
parentElement.append(kata12Heading)
kata12Heading.append('Kata 12')
let array12 = [];
for (let index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] % 2 === 0)
        array12.push(sampleArray[index])

}
parentElement.append(array12)

//kata13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)


const kata13Heading = document.createElement('h3')
parentElement.append(kata13Heading)
kata13Heading.append('Kata 13')

let array13 = [];
for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 1 === 0)
        array13.push(sampleArray[index])

}
parentElement.append(array13);

//kata14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)


const kata14Heading = document.createElement('h3')
parentElement.append(kata14Heading)
kata14Heading.append('Kata 14')



let squares = [];
for (let index = 0; index < sampleArray.length; index += 1) {
    square = sampleArray[index] * sampleArray[index]
    squares.push(square)
}
parentElement.append(squares)


//kata15 Display the sum of all the numbers from 1 to 20.


const kata15Heading = document.createElement('h3')
parentElement.append(kata15Heading)
kata15Heading.append('Kata 15')

let array15 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]
let sum = 0;
for (let index = 0; index < array15.length; index++) {
    sum += array15[index]
}
parentElement.append(sum)

//kata16 Display the sum of all the elements in sampleArray.


const kata16Heading = document.createElement('h3')
parentElement.append(kata16Heading)
kata16Heading.append('Kata 16')
let sum2 = 0;
for (let index = 0; index < sampleArray.length; index += 1) {
    sum2 += sampleArray[index]
}
parentElement.append(sum2)



//kata17 Display the smallest element in sampleArray.

const kata17Heading = document.createElement('h3')
parentElement.append(kata17Heading)
kata17Heading.append('Kata 17')
let smallest = Math.min.apply(Math, sampleArray)
parentElement.append(smallest)


// kata18 Display the largest element in sampleArray.

const kata18Heading = document.createElement('h3')
parentElement.append(kata18Heading)
kata18Heading.append('Kata 18')

let largest = Math.max.apply(Math, sampleArray)
parentElement.append(largest)

//kata19 


let kata19 = document.createElement('h3')
kata19.append('Kata 19')
boxes.append(kata19)

for (let index = 0; index < 20; index++) {
    let kata19Heading = document.createElement('div')
    boxes.append(kata19Heading)

}