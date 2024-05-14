fun main()  { //fun is used to declare a function
    //println("Hello World!")
    //println("I am learning Kotlin")
    //println("I am having a great time")
    //println(3+3)

    /* This is really fun.
    This is a multi-line comment*/

    //var and val
//    var name = "John" (var can be changed)
//    val birthyear = 1975 (val cannot be changed)
//
//    println(name)
//    println(birthyear)
//    (Kotlin is smart enough to figure out which types the variables are, however, they can be specified as follows):
//    var name: String = "John"
//    val birthyear: Int = 1975
//    (If you want to create a String without assigning it a value, you need to declare it a string type in order to assign
//    a value later)

//    val myNum = 5 //Int
//    val myDoubleNum = 5.99 //Double
//    val myLetter = 'D' //Char
//    val myBoolean = true //Boolean
//    val myText = "Hello" //String

//    val myNum: Int = 5 //Int
//    val myDoubleNum: Double = 5.99 //Double
//    val myLetter: Char = 'D' //Char
//    val myBoolean: Boolean = true //Boolean
//    val myText: String = "Hello" //String

//    var text = "dalkfjdaklfdlklenkndin"
//    println(text.length)
//    println(text.toUpperCase())
//    println(text.toLowerCase())

//    var txt1 = "Hello World"
//    var txt2 = "Hello World"
//    println(txt1.compareTo(txt2)) //The output is 0 if they are equal

//    var txt = "Please locate where 'locate' occurs!"
//    println(txt.indexOf("locate")) //Outputs 7

//    var firstName = "Adam"
//    var lastName = "Tyson"
//    println("My name is $firstName $lastName") //$ is used like f from Python

//    if conditions
//    if (0 > 18) {
//        println("20 is greater than 18")
//    }
//    else if (18 > 0) {
//        println("18 is greater than 0")
//    }
//    else {
//        println("0 is not greater than 18")
//    }

//    Kotlin When (Comparable to the switch in Java)
//    val day = 4
//    val result = when (day) {
//        1 -> "Monday"
//        2 -> "Tuesday"
//        3 -> "Wednesday"
//        4 -> "Thursday"
//        5 -> "Friday"
//        6 -> "Saturday"
//        7 -> "Sunday"
//        else -> "Invalid day."
//    }
//    println(result)

//    Kotlin While Loop
//    var i = 0
//    while (i < 5) {
//        println(i)
//        i++
//    }

//    var i = 0
//    do {
//        println(i)
//        i++
//    }
//        while (i < 5)

//    Kotlin Break and Continue
//    var i = 0
//    while (i < 10) {
//        println(i)
//        i++
//        if (i == 4) {
//            break
//        }
//    }

//    var i = 0
//    while (i < 10) {
//        if (i == 4) {
//            i++
//            continue
//        }
//        println(i)
//        i++
//    }

//    val cars = arrayOf("Volvo", "BMW", "Kia", "Ford")
//    println(cars[2])
//    cars[2] = cars[3]
//    println(cars[2])
//    println(cars.size)

//    Kotlin For Loop
//    val cars = arrayOf("Volvo", "BMW", "Kia", "Ford")
//    for (x in cars) {
//        println(x)
//    }

//    Kotlin Ranges
//    for (chars in 'a'..'x') {
//        println(chars)
//    }
//    for (nums in 5..15) {
//        println(nums)
//    }
//    val nums = arrayOf(1,2,3,4,5)
//    if (2 in nums) {
//        println("Yes")
//    }
//    else {
//        println("No")
//    }
//
//    val cars = arrayOf("Volvo", "BMW", "Kia", "Ford")
//    if ("Volvo" in cars) {
//        println("Yes")
//    }
//    else {
//        println("No")
//    }

//    myFunction("John")
//    myFunction("Jane")
//    myFunction("George")

//    myFunction("John", 35)
//    myFunction("Jane", 32)
//    myFunction("George",15)

//    var result = myFunction(3)
//    println(result)

//    var result = myFunction(3,5)
//    println(result)

}

//fun myFunction () {
//    println("Hello World")
//}

//fun myFunction(fname: String) {
//    println(fname + " Doe")
//}

//fun myFunction(fname: String, age: Int) {
//    println("$fname is $age")
//}

//fun myFunction(x: Int): Int{ //The second Int is used to represent the return value
//    return (x + 5)
//}

//fun myFunction(x: Int, y: Int) : Int {
//    return (x + y)
//}