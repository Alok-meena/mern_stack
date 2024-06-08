

Q1: Write a for loop that prints all even numbers from 0 to 20.

Ans 1) for(let i = 0; i <= 20; i++){
	if(i%2 === 0)Console.log(i)
}

Q2: Declare a variable and assign it an integer value. Write a do-while loop that subtracts 2 from the variable and prints the variable’s value until it is less than or equal to 0.

Ans 2)  let val = 20
	do{
		Console.log(val);
		val -= 2;
	}while(val > 0)

Q3: Write a normal function named square that takes a number as a parameter and returns its square.
		
Ans 3)		function square(num){
		return num*num;
		}
		console.log(square(5))  // output is 5
	

Q4: Convert the square function from Question 3 to an arrow function.
Ans 4 )   const square = (val) =>  val*val
		console.log(square(5)) // output is 25

Q5: Write a normal function named isEven that takes a number as a parameter and returns true if the number is even, and false otherwise.
Ans)   		function isEven(val){
		return val%2 === 0; 
		}
		console.log(isEven(4)) // true;
	

Q6: Write an arrow function named isOdd that takes a number as a parameter and returns true if the number is odd, and false otherwise.
Ans)   		const isEven = (val) => val%2 === 0; 

		console.log(isEven(100)) // true;	


Q7: Declare an array with the values [5, 3, 8, 1, 2]. Write code to sort this array in ascending order.
Ans 7 )     let arr = [5 , 3, 8, 1, 2];
		
		function isSorting(arr){
		return arr.sort((a ,b) => a - b)	
		}
		console.log(isSorting(arr));

 function sortarray(a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(a[j]>a[j+1]){
            let temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
        }
    }
}

let arr=[4,3,5,2,6];
console.log(arr);
sortarray(arr);
console.log(arr);

Q8: Write a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
Ans 8 )        let arr = [5 , 3, 8, 1, 2];
		
		const isSorting = (arr) => arr.sort((a ,b) => a - b)	
		
		console.log(isSorting(arr));

Q9: Write a function named filterEvens that takes an array of numbers as a parameter and returns a new array containing only the even numbers from the original array.
Ans 9 )     let arr = [5 , 3, 8, 1, 2];
		let resultant = arr.filter((val) => val%2 ===0)
		console.log(resultant);

Q10: Create an object named person with properties name (a string), age (a number), and city (a string). Write a function named printPerson that takes the person object as a parameter and prints a string describing the person.
Ans  const obj = {
		name : "hello",
		age : 25,
		city : "delhi"
		}
		
			function printPerson(person){ 
				console.log(person.name , person.age , person.city)
				}
				console.log(printPerson(obj))

Q11: Write a function named sortNames that takes an array of strings as a parameter and returns a new array with the strings sorted in alphabetical order.
Ans 11 )        let arr = ["hello" , "bello", "pello", "tello"];
		
		 function sorting(arr){
			for(let i = 0; i < arr.length; i++){
			for(let j = 0; j < arr.length; j ++){
				if(arr[i] > arr[j]){
					let temp = arr[i]
					arr[i] = arr[j];
					arr[j] = temp
					}
				}
			}
		}

		console.log(sorting(arr));

Q12: Write a function named reverseArray that takes an array as a parameter and returns a new array with the elements in reverse order.
Ans )   
		function reverseArray(arr){
				let res = [];
			for(let i = arr.length-1; i >= 0; i-- ){
					res.push(arr[i])
				}
				
				return res;
			
		}
		let arr = ["hello" , "bello", "pello", "tello"]
		console.log(reverseArray(arr));
		
Q13 : https://leetcode.com/problems/two-sum/
Ans 13)		

var twoSum = function(nums, target) {
    let arr = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i +1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }
    return arr;
};

	

Q14 : You can use build in sort -> https://leetcode.com/problems/sort-an-array/description/

Ans 14)   class Solution {

    public int[] merge(int []a1 , int []a2){

        int res[] = new int[a1.length  + a2.length];
        int i =0, j =0 , k = 0;

        while( i < a1.length && j < a2.length){
            if(a1[i] < a2[j]){
                res[k++] = a1[i++];

            }else{
                res[k++] = a2[j++];
            }
        }

        while(i < a1.length){
            res[k++] = a1[i++];
        }

        while(j < a2.length){
            res[k++] = a2[j++];
        }

        return res;
    }

    public int[] divide( int i , int j , int []arr){

            if(i == j){
                int res[] = new int[1];
                res[0] = arr[i];
                return res;
            }

        int mid = i + (j - i)/2;

        int lrr[] = divide(i , mid, arr);
        int rrr[] = divide(mid + 1, j, arr);
        int narr[] = merge(lrr, rrr);
        return narr;

    }
    public int[] sortArray(int[] nums) {
        
       return  divide(0, nums.length -1, nums);

    }
}
