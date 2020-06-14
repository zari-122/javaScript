
// chap   #   1
// Que # 1


// alert("Welcome To This Site");


// Que # 2
// alert("Error!  Please Enter a Valid Password.")


// Que # 3

// alert("Welcome To JS Land.." + "\r\n" + "Happy Coding!")

// Que # 4


// alert("Welcome To JS Land...");
// alert("Happy Coding!");

// Que # 5
// alert("Hello... i can run Js Through My Web Browser's Console")



// Chap # 2

// Que # 1  And 2

// var userName= "Zaryab";

// Que # 2

// var myName=   "Ali";

// Que # 3
 
// var message ="Hello world"
// alert(message);

// Que # 4 


// var name = "Zaryab";
// var age  = "24"; 
// var bio  = "certified Mob Application Development"
// alert (name);
// alert(age);
// alert(bio);

// Que # 5

// alert("PIZZA \n PIZZ \n PIZ \n PI \n P");


// Que # 6


// var email ="zaryab124@gmail.com";
// alert("My Emial Address Is" +" " +email)

// Que # 7 


// var book ="I am Trying To learn from the book “A smarter way to learn JavaScript”."
// alert(book);

// Que # 8 

// var a= "Yah! I can Write HTML Content Through JavaScript"
// document.write(a);




//  Que # 9 

// var b= "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
// alert(b);

                                                      // End


// Chap # 3 

//  Que # 1

//   var age ="15";
//   alert("I am" + " " + age +  " "  + "Years old")


// Que # 2

// var num ="14";
// alert("You Have Visited This Site" + " " + num +" Times")

// Que # 3

// var birthYear= "1995";
// document.write("My Birth Year Is" + " " + birthYear);
// document.write("<br>")
// document.write("Data Type Of my declared Variable is number") ;

// Que # 4 

// var visitorName = "Jhon Doe";
// var order       = "5 T-Shirts"
// var store =" Dolmen center"
// document.write(visitorName + " " + "ordered" +" " + order + "(s)" + " " + "on" + store);




// Chap # 4 


// Que # 1
// document.write(" illegal Variables" + " var ali-4"  + " <br>" +" var.ali" + "<br>" + "var 1ali" + "<br>" + "var product cost" + "<br>" +"var P2_a%88$ ")


// Que # 2

// document.write("Legal Variables" + "<br>" + " var userName" + "<br>" + "var $hello" + "<br>" +"var abc_hello" + "<br>" +"var ali1" +"<br>" + "var ali")

// Que # 3

// document.write("<b>Rules for naming Js variables</b>")
// document.write("<br>"+"<br>" +"<br>" )
// document.write("Variable names can only contain , numbers,$ and _ For example : $my-1stVariable " +"<br>");
// document.write("variable must begin with a letter $ or _  For example : $name, _name or name"  +" <br>")
// document.write("variables name are case Sensitive" +"<br>")
// document.write("variables names shuould be JS keywords")




// Chap # 5


// Que # 1


// var c =+prompt() ;
// var d =+prompt()
// var add= c+d;
// document.write("SUM of 3 and 5 is" + " " + add);



//Question 6



// var celcius = prompt("Enter the temperature in celcius:")
// var fahrenheit = (celcius * 9 / 5) + 32
// console.log(celcius + "°C is " +  fahrenheit + "°F")

// var f = prompt("Enter the temperature in farhenheit")
// var c =  (f - 32) * (5 / 9)
// console.log(f + "°F is " + c + "°C")





//Question 7




// document.write("<b>SHOPPING CART</b><br>")





// var price1 = prompt("Enter price of item 1");
// document.write("Price of item 1 is "+ price1 + "<br>")

// var Quantity1 = prompt("Enter quantity of item 1");
// document.write("Quantity of item 1 is " + Quantity1 + "<br>")

// var price2 = prompt("Enter price of item 2");
// document.write("Price of item 2 is " +  price2 + "<br>")

// var Quantity2 = prompt("Enter quantity of item 2");
// document.write("Quantity of item 2 is " +  Quantity2 + "<br>")

// var ship = +prompt("Enter shipping charges");
// document.write("Shipping charges are " + ship + "<br>")

// var total = (price1 * Quantity1 + price2 * Quantity2 + ship)
// document.write("Total cost of your order is " + total + "<br>")






//Question 8




// document.write("<b> MARKS SHEET </b><br>")


// var sub1 = +prompt("write marks of subject 1")
// var sub2 = +prompt("write marks of subject 2")
// var sub3 = +prompt("write marks of subject 3")

// var obtain = (sub1 + sub2 + sub3 )
// var per = obtain / 300 * 100

// document.write("Total marks 300" + "<br>")
// document.write("marks obtained "+ obtain + "<br>")
// document.write("percentage " + per + "% " + "<br>")





//Question 9




// var us = prompt("write amount in $")
// var riyal = prompt("write amount in riyal")
// var pkr = (us * 104) + (28 * riyal)
                                
// document.write("<b> Total Currency in PKR </b><br>")
// document.write("PKR " + pkr)


//Question 10



// var digit = +prompt("write digit here")
// var calculation = +( (digit+5) * (10)) / 2
// alert(calculation)





//Question 11



// document.write("<b> Age Calculator </b><br>")

// var currentYear = +prompt("write current year")
// var birthYear = +prompt("your birth year")
// var age = (currentYear - birthYear)
                               
// document.write("Current Year : " + currentYear + " <br> ")
// document.write("Birth Year : " + birthYear + " <br> ")
// document.write("your age is : " + age + " or " + (++age))





//Question 12


// document.write("<b> The Geometrizer </b><br>")


// var radius = +prompt("enter the radius of circle")
// var pie = 3.142
// var circum = 2 * pie * radius
// var area = (2 * pie) * radius * radius


// document.write("The radius of a circle is " + radius + "<br>")
// document.write("The Circumference of circle is " + circum + "<br>")
// document.write("Area of the cicle is " + area + "<br>")





//Question 13



// var snack = prompt("Which is your favorite Snack:")
// var old = +prompt("What is your current age:")
// var max = +prompt("Enter the maximum age:")
// var amount = +prompt("How many snacks you take per day")

// var totalSnacks=(max-old) * 365 * amount

// document.write("<b> The Lifetime Supply Calculator </b><br>")
// document.write("Favorite Snack:" + snack + "<br>")
// document.write("Current age:" + old + "<br>")
// document.write("Maximum age:" + max + "<br>")
// document.write("Amount of snack per day:" + amount + "<br>")
// document.write("" + "<br>")
// document.write("You will need " + totalSnacks + snack + " to last you until the ripe old age of " + max + "<br>")

// #chap 6

// Question 1
                                
// var a = 10
// document.write("The value of a is " + a + "<br>")
// var a = ++a
// document.write("")
// document.write("The value of ++a is " + a + "<br>")
// document.write("Now the value of a is " + a + "<br>")
// document.write("")

// document.write("The value of a++ is " + a + "<br>")
// var a = ++a
// document.write("Now the value of a is " + a + "<br>")
// document.write("")

// var a = --a
// document.write("The value of --a is " + a + "<br>")
// document.write("Now the value of a is " + a + "<br>")
// document.write("")

// document.write("The value of a-- is " + a-- + "<br>")
// document.write("Now the value of a is " + a + "<br>")



//Question 2




// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--
// document.write("The initial result is " + result + "<br>")
// document.write("" + "<br>")

// document.write("--a;1" + "<br>")
// document.write("--a - --b;1" + "<br>")
// document.write("--a - --b + ++b;3" + "<br>")
// document.write("--a --b + ++b + b--;3" + "<br>")
// document.write("" + "<br>")

// document.write("a is 1" + "<br>")
// document.write("b is 2" + "<br>")
// document.write("result is" + result + "<br>")
// document.write("" + "<br>")


//Question 3



// var nameUser = prompt("Enter Your Name...!")

// alert("Hello ! " + nameUser)





// Quesiton 4

// Question is not written



// Question 5





// var que5_1 = prompt("Enter a Number Here")
// if (!que5_1) {
//     que5_1 = 5
// }
// console.log(que5_1 + " X 1 = " + que5_1 * 1)
// console.log(que5_1 + " X 2 = " + que5_1 * 2)
// console.log(que5_1 + " X 3 = " + que5_1 * 3)
// console.log(que5_1 + " X 4 = " + que5_1 * 4)
// console.log(que5_1 + " X 5 = " + que5_1 * 5)
// console.log(que5_1 + " X 6 = " + que5_1 * 6)
// console.log(que5_1 + " X 7 = " + que5_1 * 7)
// console.log(que5_1 + " X 8 = " + que5_1 * 8)
// console.log(que5_1 + " X 9 = " + que5_1 * 9)
// console.log(que5_1 + " X 10 = " + que5_1 * 10)




// Question 6




// var subject1 = prompt("Enter first subject ")
// var subject2 = prompt("Enter second Subject")
// var subject3 = prompt("Enter 3rd subject")

// var totalMark = 100

// var obtain1 = +prompt("Enter " + subject1 + " marks here... out of " + totalMark)
// var obtain2 = +prompt("Enter " + subject2 + " marks here... out of " + totalMark)
// var obtain3 = +prompt("Enter " + subject3 + " marks here... out of " + totalMark)

// var obtained = obtain1 + obtain2 + obtain3


// var percent = obtained * 100 / 300

// var percent1 = obtain1 * 100 / 100
// var percent2 = obtain2 * 100 / 100
// var percent3 = obtain3 * 100 / 100



// document.write("<table> <tr> <th>Subject</th> <th>Total Marks </th> <th> Obtained Marks </th>  <th>Percentage</th> </tr> <tr> <td>" + subject1 + "</td> <td>" + totalMark + "</td> <td>" + obtain1 + "</td>  <td>" + percent1 + "%" + "</td> </tr> <tr> <td>" + subject2 + "</td> <td>" + totalMark + "</td> <td>" + obtain2 + "</td>  <td>" + percent2 + "%" + "</td> </tr> <tr> <td>" + subject3 + "</td> <td>" + totalMark + "</td> <td>" + obtain3 + "</td>  <td>" + percent3 + "%" + "</td> </tr>              <tr> <td> Total MArks of All subjects </td> <td>" + 300 + "</td> <td> " + obtained + "</td>  <td>" + percent + "%" + "</td> </tr> </table>")



// Question 7 

// Question is not written





//======================================chapter # 9 - 11 ============================================== // 




//Question 1


// var city = prompt("Enter the name of city")
// if (city == "karachi" || city == "Karachi") {
//     alert("Welcome to the city of lights")
// }





//Question 2



// var gender = prompt("Enter your gender")
// if (gender == "male" || gender == "Male"){
//     alert("Good Morning Sir")
// }
// else if (gender == "female" || gender == "Female"){
//     alert("Good Morning Ma’am")
// }





//Question 3





// var color = prompt("Enter the color")
// color = color.toLowerCase()

// if (color == "red"){
//     alert("Vehicles must Stop")
// }
// else if (color == "green"){
//     alert("Vehicles move now")
// }
// else if(color == "yellow"){
//     alert("Vehicles should get ready to move")
// }
// else{alert("Invalid color")}




//Question 4




// var remFuel = prompt("Enter the amount of remaining fuel in Litres")
                                
// if (remFuel < 0.25){
//     alert("Please Refill the fuel in your car")
// }




//Question 5





  /* ** "A" ** */
                                
//   var a = 4;
//   if (++a === 5) {
//       alert("given condition for the variable is true");
//   } 
  
//   /* ** given consition is true because the value is equal to 5 ** */
  
  
//   /* ** "B" ** */
//   var b = 82;
//   if (b++ === 83){
//       alert("given consdition for the variable is true")
//   } 
  
  /* ** condition is not true because the value is not equals to 83 at this point ** */
  
  
  /* ** "C" ** */
//   var c = 12;
//   if (c++ === 13){
//       alert("condition 1 is true")
//   }
//   if(c === 13){
//       alert("condition 2 is true")
//   }
//   if(++c < 14){
//       alert("condition 3 is true")
//   }
  
//   if(c === 14){
//       alert("condition 4 is true")
  
//   }  
  
  /* ** condition 2 is true ** */
  
  
//   /* ** "D" ** */
//   var materialCost = 2000;
//   var laborCost = 2000;
//   var totalCost = materialCost+laborCost;
  
//   if (totalCost === laborCost + materialCost){
//       alert("The cost equals")
//   } 
  
  /* ** the consition is true ** */
  
  
//   /* ** "E" ** */
//   if (true) {
//       alert("True")
//   }
//   if(false){
//       alert("False")
//   } 
  
  /* ** the consition is true ** */





  //Question 6




//   var marksObtain = +prompt("Enter the marks obtained in 3 subject")
//   var totalMarks = +prompt("Enter the total marks")
//   var percentage = marksObtain / totalMarks * 100
                                
//   document.write("<b> MARKS SHEET </b><br>")
//   document.write("Marks obtained: " + marksObtain + "<br>")
//   document.write("Total marks: " + totalMarks + "<br>")
//   document.write("Percentage: " + percentage + "%" + "<br>")
                                
                                
//   if(percentage >= 80){
//         document.write("Grade: A-one" + "<br>")
//         document.write("Remarks: Excellent" + "<br>")
//     }
//    else if(percentage >= 70){
//         document.write("Grade: A" + "<br>")
//         document.write("Remarks: Good" + "<br>")
//     }
//    else if(percentage >= 60){
//         document.write("Grade: B" + "<br>")
//         document.write("Remarks: You need to improve" + "<br>")
//     }
//     else if(percentage < 60) {
//         document.write("Grade: Fail" + "<br>")
//         document.write("Remarks: Sorry" + "<br>")
//     }
               
    


//Question 7





// var secretNumber = 6
// var guess = +prompt("Enter the Secret number ranging 1-10")
                                
// if (guess === secretNumber){
// console.log("Bingo! Correct Answer")
                                
//   }
                                
// else if (guess===++secretNumber){
// console.log("Close enough to the correct answer")
                                
//   }
                                
// else if (guess = --secretNumber){
// console.log("Close enough to the correct answer")
  
// }  


//Question 8






// var number = +prompt("Enter the number")
// if(number % 3 === 0){
//     console.log(number + "is divisible by 3")
// }




//Question  9




// var num = +prompt("Enter the number")
                                
// if(num % 2 === 0){
//      console.log(num + " is an Even number")
//    }
                               
// else if(num % 2 != 0){
//      console.log(num + " is an Odd number")
//    }






//Question 10




// var temp = +prompt("Enter the temperature in Celcius")
                                
// if (temp >= 40){
// console.log("It's very hot")
//      }
// else if(temp > 30){
// console.log("Weather is normal")
//      }
// else if(temp > 20){
// console.log("Weather is Cool today")
//      }
// else if(temp > 10){
// console.log("OMG! Weather today is very cool")
//      }


    


//Question 11    





// var firstNumber = +prompt("Enter the first number")
// var secondNumber = +prompt("Enter the second number")
// var operation = prompt("Enter the operation to perform +,-.*,/")
                                
// if(operation == "+"){
// console.log("The sum of two numbers is " + firstNumber + secondNumber)
//      }
// else if(operation == "-"){
// console.log("The difference of two numbers is " +firstNumber - secondNumber)
//      }
// else if(operation == "*"){
// console.log("The product of two numbers is " +firstNumber * secondNumber)
//      }
// else if(operation == "/"){
// console.log("The division of two numbers is " +firstNumber / secondNumber)
// }


//======================================chapter # 12 - 13 ============================================== // 






//Question 1





// var numb = prompt("Enter Number or String")
// if (numb === "A") {
//     alert("A = 65 & this is Upercase")
// } else if (numb === "a") {
//     alert("a = 97 & this is lowercase")
// } else if (numb === "Z") {
//     alert("Z = 90 & this is upercase")
// } else if (numb === "z") {
//     alert("z = 122 & this is lowercase")
// }





//Question 2



// var ab = +prompt("enter 1st number")
// var ac = +prompt("enter 2nd num")
// if (ab > ac){
// console.log(ab + " is larger number")
//   }

// else(ac + " is larger")





//Question 3





// var numeric = +prompt("enter a number")
// if (numeric > 0){
//     console.log("number is Positive")
//      }
// else{
//      console.log("number is Negative")
//      }





//Question 4




// var input = prompt("Enter a character:");
// if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
//     alert("Its a vowel");
// } else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
//     alert("Its a consonant");
// } else {
//     alert("Invalid input please enter an alphabet");
// }




//Question 5


// var password = "abc123"
// var confrimPass = prompt("enter your password")
// if (confrimPass.toLowerCase() == password){
// console.log("password is right")
//     }
// else{
// console.log("password is incorrect")
//      }
                                


     
//Question 6



// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day"
//     }
// else{
// greeting = "Good evening";
//     }



//Question 7 


// var time1 = prompt("Enter time like this 12:00 pm")

// if (time1 >= 0000 && time1 <= 1200) {
//     alert("Good Morning")
// } else if (time1 >= 1200 && time1 <= 1700) {
//     alert("Good Afternoon")
// } else if (time1 >= 1700 && time1 <= 2100) {
//     alert("Good Evening")
// } else if (time1 >= 2100 && time1 <= 2359) {
//     alert("Good Night")
// }


//======================================chapter # 14 - 16 ============================================== // 




// Question 1
                                
               

// var student_name = []
                                
                                
                                
// Question 2


                                
// var student={}
                                
                                
                                
// Question 3
                                
                                

// var str = ["Hello World"]                                
// console.log(str)
                                       
                                
                                
// Question 4



                                
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(number)
                                
                                
                                
                                
// Question 5
                                
                                
// var boolean = [true,false]
// console.log(boolean)
                                
                                
                                
                                
// Question 6
                                
                                
// var mix = ["Pakistan", 3227, true]
// console.log(mix)
                                
                                                                
                                

//Question 7



// var educaction = ["SSC" , "HSC" , "BCS" , "B.COM" , "BBA" , "MSC" , "M.Phil" , "PhD"]
// document.write("<b> Qualification </b><br>")
// document.write("1)" + educaction[0] + " <br>")
// document.write("2)" + educaction[1] + " <br>")
// document.write("3)" + educaction[2] + " <br>")
// document.write("4)" + educaction[3] + " <br>")
// document.write("5)" + educaction[4] + " <br>")
// document.write("6)" + educaction[5] + " <br>")
// document.write("7)" + educaction[6] + " <br>")
// document.write("8)" + educaction[7] + " <br>")
                              


//Question 8




// var student = ["ali" , "ashraf" , "sajid"]
                                
// for (var i = 0 ; i < student.length ; i++){
// var studentMarks = [320 , 420 , 470 ]
// for (var j = 0 ; j < studentMarks.length ; j++){
// var  percentage = studentMarks[i] * 100 / 500
//     }
// document.write("Score of " + student[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")   
//     }
                                




//Question 9



// var color = ["Red" , "Blue" , "Green"]
// console.log(color)

// var newColor = prompt("Which color you want to add in the beginning")
// color.unshift(newColor)
// console.log(color)

// var endColor = prompt("Which color you want to add at the end")
// color.push(endColor)
// console.log(color)

// var newColor1 = prompt("Again enter the color to add in the beginning")
// var newColor2 = prompt("Again enter the color to add in the beginning")

// color.unshift(newColor1)
// color.unshift(newColor2)
// console.log(color)

// color.shift(color)
// console.log(color)

// color.pop(color)
// console.log(color)

// var indexNumber = +prompt("Enter the index number on which you want to add color")
// var colorName = prompt("Enter the color name you want to add")

// color.splice(indexNumber + 0 + colorName)
// console.log(color)

// var indexNumber1 = +prompt("At which index you want to delete the color?")
// var quantity = +prompt("How many colors you want to delete from the array?")
// color.splice(indexNumber1 + quantity)
// console.log(color)




//Question 10




// var score = [320, 230, 420, 180]
// document.write("Score of Students: " + score)
// var ascending = score.sort()
// document.write("Ordered Score of students: " + ascending)




//Question 11



// var citiesList = ["Karachi" , "Lahore" , "Peshawar" , "Quetta"]
// console.log("Cities list: " + citiesList)
// var selectedCities = [citiesList[1] + " and " +citiesList[3]]
// console.log("Selected Cities: " + selectedCities)




//Question 12



// var arr = ['This', 'is', 'my', 'cat']
// arr.join(" ")



//Question 13




// var fifo = []
// fifo.push("Keyboard")
// fifo.push("Mouse")
// fifo.push("Joystick")
// fifo.push("C.P.U")
// fifo.push("Speaker")



//Question 14



// var fifo_end = []
// fifo_end.unshift("Keyboard")
// fifo_end.unshift("Mouse")
// fifo_end.unshift("Joystick")
// fifo_end.unshift("C.P.U")
// fifo_end.unshift("Speaker")






//Question 15



// var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write("<select> <option>" + mobile[0] + "</option> <option>" + mobile[1] + "</option> <option>" + mobile[2] + "</option> <option>" + mobile[3] + "</option> <option>" + mobile[4] + "</option>  <option>" + mobile [5] + "</option>   </select>  ")





//======================================chapter # 17 - 20 ============================================== // 



//Question 1



// var multiArrEmpty = [
//     [],
//     []
// ]




//Question 2




// var multiArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]



//Question 3



// for (var i = 1; i <= 10; i++) {
//     document.write(i + " <br>")
// }




//Question 4




// var table = +prompt("Please enter table number")
// var length = +prompt("Please enter length of table")

// for (var i = 1; i <= length; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>")
// }




//Question 5




// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// for (var i = 0; i < fruits.length; i++) {
//     console.log("Element at index " + i + " is " + fruits[i])
// }




//Question 6




// Section (A)
// ========
// document.write(" <h2>a. Counting: </h2>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",")

// }


// Section (B)
// ========
// document.write(" <h2>b. Reverse Counting: </h2> ")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",")
// }


// Section (C)
// ========
// document.write(" <h2>c. Even</h2>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ",")
// }

// Section (D)
// ========
// document.write(" <h2>d. odd </h2>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i +",")
// }

// Section (E)
// ========
// document.write("<h2>e. Series </h2>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + "K,")
// }




//Question 7




// alert("Welcome to our bakery")
// var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// var inputCart = prompt("Welcom! What you want?")
// var isFound = false //this is called flag

// for (i = 0; i < itemBakery.length; i++) {
//     if (inputCart === itemBakery[i]) {
//         alert(inputCart + " is available at index " + i + " in our bakery")
//         isFound = true
//         break
//     }
// }
// if (isFound === false) {
//     alert("We are sorry. " + inputCart + " is not availabale")
// }




//Question 8




// var A = [24, 53, 78, 91, 12]

// console.log("Array items: " + A)
// A = A.sort()
// console.log("The largest number is: " + A[A.length - 1])




//Question 9



// var b = [24, 53, 78, 91, 12]

// console.log("Array items: " + b)
// b = b.sort().reverse()
// console.log("The smallest number is: " + b[b.length - 1])




//Question 10



// document.write("<h2>5 Ranging</h2>")
// for (var i = 5; i <= 100; i = i + 5) {
//     document.write(i + ",")
// }






//===================================THE END=============================//