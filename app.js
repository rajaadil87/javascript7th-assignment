

// chapter 38 -44 task 1

// function pow(a,b){
    
//    r.value = Math.pow(a,b)
// }
// console.log(pow(2,3))


// chapter 38 -44 task 2
// var a =+prompt("Please enter the Year")

//     var b=4
//     var c=100
//     var d=400;
  
    
//     function leapYear(){

//         if(((a % b == 0) && (a % c != 0)) || (a % d == 0)){
//             return ("this is a leap year")
//         }else{
//            return ("this is not a leap year")
//         }
        
//     }

//     alert(leapYear())


// chapter 38 -44 task 3

//     var a =+ prompt("please enter the area of a side")
//     var b =+ prompt("please enter the area of b side")
//     var c =+ prompt("please enter the area of c side")


//         var s = (a+b+c)/2;  

//    function area(){ 
    
//     var area = s*(s-a)*(s-b)*(s-c)

//     return area

// }
// alert(area())


// chapter 38 -44 task 4

// var marksOne =+ prompt("please enter first subject marks")
// var marksTwo =+ prompt("please enter second subject marks")
// var marksThree =+ prompt("please enter third subject marks")


// function avg(){
// var total = (marksOne+marksTwo+marksThree) / 3
// return total

// }


// function percent(){
// var per = ((marksOne+marksTwo+marksThree) / 300 )* 100
// return per
// }


// function main(){
    
//    alert ( "the average of the subjects are" + " " + avg()) ;
//    alert  ("the percentage of the subjects are" + " " + percent());

// }
// main()


// chapter 38 -44 task 5

// function WordCount() { 
//     var str = prompt("enter the word")
//     var n= prompt("whihc words number you want")
//     return str.split(" ").length;
//   }
  
//   alert(WordCount());


// chapter 38 -44 task 6

// var a =prompt("PLease enter a sentence and we remove the vowels for you") 

// function vowel(){ 
//         return(a.replace(/a|e|i|o|u/g, " "))      
// }

// alert(vowel())

// chapter 38 -44 task 7

var sen =prompt("please read this application and give me gratity") 


function occurance(){
    switch(vow){
        case 1:
        vow="ae"
        case 2:
         vow="ai"   
         case 3:
            vow="au" 
            case 4:
                vow="ao"
                case5:
                vow="ea"

    }
    return count(vow)

}

alert(occurance())