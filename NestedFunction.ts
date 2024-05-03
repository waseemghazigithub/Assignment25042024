
let age: number = 40;
let name1: string = "Waseem Ghazi";
let IDNo: Number = 123;

console.log(`My Name is my Waseem Ghazi and my Age is: ${age}`)
AgeDiffrence(30)

function AgeDiffrence(sibling_age: number) {
    let AgeDiff = age - sibling_age;
    let findage= SAge(AgeDiff)
    let myagefatertenyear=0;
    let siblingageafterten=0;
  
    aftertenyear()
    if (AgeDiff > 0) {
        console.log("Sbilling Younger then me.");
        console.log(`My siblling  his / her Age is ${findage}` )
        console.log(`\nAfter ten year my Age will be (${myagefatertenyear}) and my sibling age will be (${siblingageafterten}) `)
    } else {
        console.log  ("Sbilling Oldest with me.");
        console.log(`My siblling  his / her Age is ${findage}` )
        console.log(`\nAfter ten year my Age will be (${myagefatertenyear}) and my sibling age will be (${siblingageafterten}) `)
    }
    function SAge(AgeDiff:number){
        let sib = age-AgeDiff;
        return(sib)
         }
     function aftertenyear(){
            myagefatertenyear=  age+10
            siblingageafterten= findage+10
        }
        }

