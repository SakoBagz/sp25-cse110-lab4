1. 3 - Var is function scoped so after the loop it still exists and is incremented up to prices.length. 
2. 150 - discountedPrice is declared with var inside the for loop so after the loop finishes, it still exists and holds the last computed value which is 150. 
3. 150 - finalPrice was declared with var at the top of the function so once the loop finishes it holds the value of the last computed discount value which is 150. 
4. [50, 100, 150] - You start with prices = [100, 200, 300] and discount = 0.5 so after running it returns the array with each of the original elements halved. 
5. ReferenceError: i is not defined - i was declared with let in the for header so referencing it outside the loop throws this error
6. ReferenceError: discountedPrice is not defined - discountedPrice is defined with let inside of the loop, therefore ounce outside that block it is out the scope and an error is thrown. 
7. 150 - finalPrice was declared with let at the top of the functio , so it exists throughout the entirety of the function and holds the last discounted value of 150
8. [50, 100, 150] - You iterate over [100, 200, 300] with a 50% discount
9. ReferenceError: i is not defined - i is declared in the for loop header with let so once we exit the for loop i doesnt hold anymore 
10. 3 - length is defined with const at line 4 so by the time it hits the console.log it still exists and holds the value 3
11. [50, 100, 150] - You start with prices = [100, 200, 300] and discount = 0.5. The for loop runs 3 times and the values get pushed into the discounted array which gets returned. 
12. A - student.name \
    B - student['Grad Year']\
    C = student.greeting()\
    D - student['Favorite Teacher'].name\
    E - student.courseLoad[0]
13. A - "32", + with a string and number turns the number into a string and concatenates\
B - 1, - operator does numeric subtraction so '3' becomes 3 and gets subtracted with 2. \
C - 3, null is converted to 0 so result is 0\
D - "3null", Because one operand is a string, null gets converted to "null" and concatenated\
E - 4, true becomes 1 in numeric addition\
F - 0, false and null both become 0\
G - "3undefined", string concatenation so undefined becomes "undefined"\
H - NaN, subtraction turns both sides to numbers
14. A. true, '2' turns into 2, 2>1. \
    B. false, both operands are string so it does a lexical comparison which comes out to false \ 
    C. true, == changes "2" to 2, makes statement true\
    D. false, === does not change types, numbers are never equal to strings\
    E. false, == is 1 not 2 so they are not equivalent\
    F. true, true === true
15. == will change the operands to a common type before comparing while === won't and checks for strict equality
17. This should return [2, 4, 6]. modifyArray creates and empty array newArr, it loops over [1, 2, 3], calls callback which is doSomething which doubles the number, and this new array of doubled numbers now gets returned. 
19. 1\
4\
3\
2\
console.log(1) runs immediately, the setTimeout calls schedule callbacks but dont run them yet, console.log(4) then runs immediately, then after the call stack is doe the 0 ms timer fires and logs 3, then 1000ms later the longer timer fires and logs 2. 

    