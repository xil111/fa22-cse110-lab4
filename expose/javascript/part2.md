1. output is 3. Because there're 3 elements in variable prices.When i is 3, it is not smaller than prices.length. So for loop ends.
2. output is 150. Because the last time we assign value to discountedPrice is when i = 2. discountedPrice = prices[2] *(1-discount) = 300 * 0.5 = 150.
3. output is 150. Because 150 * 100 / 100 = 150.
4. it will return [50, 100, 150]. final price of 100, 200, 300 are 50, 100, 150.
5. ReferenceError. Because i is only defined in the for loop.
6. ReferenceError. Because discountedPrice is only defined in the for loop.
7. 150. Because 150 * 100 / 100 = 150
8. it will return [50, 100, 150]. final price of 100, 200, 300 are 50, 100, 150.
9. ReferenceError. Because i is only defined in the for loop.
10. 3. Because prices length is 3.
11. it will return [50, 100, 150]. final price of 100, 200, 300 are 50, 100, 150.
12. - A: student.name  
    - B: student["grad year"] 
    - C: student.greeting() 
    - D: student['favorite teacher'].name 
    - E: student.courseLoad[0]
13. - A:  32 since integers map to their exact string representation
    - B: 1 since minus is number arithmetic.3-2 = 1
    - C: 3 since 3 + null = 3 + 0 = 3
    - D: 3null since integer map to its string representation
    - E: 4 since true + 3 = 1 + 3 = 4
    - F: 0 since false + null = 0 + 0 = 0
    - G: 3undefined。 since 3 becomes string so 3 + undefined = 3undefined
    - H: NaN, since 3 and undefined are string but minus is for numbers. Therefore, the output is not a number.
14. - A: true. Because when comparing a string with a number. javaScript will convert the string to a number when doing the comparison
    - B: false since '2'(the first char in string '2') is greater than '1'
    - C: true. since number 2 is equal to number 2.
    - D: false since string and number are different types.
    - E: false since true is 1 and 1 != 2.
    - F: true since boolean(2) is true. true is equal to true. they are both boolean type.
15. == is equal. === is strict equal. === also check if both sides are the same type.
17. [2,4,6]. i = 0, callback(array[0]) = callback(1) = doSomeThing(1) = 2. i = 1, callback(array[1]) = callback(2) = doSomeThing(2) = 4. i = 2, callback(array[2]) = callback(3) = doSomeThing(3) = 6. 
19. 1 4 3 2
