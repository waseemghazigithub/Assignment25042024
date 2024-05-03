var age = 40;
var name1 = "Waseem Ghazi";
var IDNo = 123;
console.log("My Name is my Waseem Ghazi and my Age is: ".concat(age));
AgeDiffrence(30);
function AgeDiffrence(sibling_age) {
    var AgeDiff = age - sibling_age;
    var findage = SAge(AgeDiff);
    var myagefatertenyear = 0;
    var siblingageafterten = 0;
    aftertenyear();
    if (AgeDiff > 0) {
        console.log("Sbilling Younger then me.");
        console.log("My siblling  his / her Age is ".concat(findage));
        console.log("\nAfter ten year my Age will be (".concat(myagefatertenyear, ") and my sibling age will be (").concat(siblingageafterten, ") "));
    }
    else {
        console.log("Sbilling Oldest with me.");
        console.log("My siblling  his / her Age is ".concat(findage));
        console.log("\nAfter ten year my Age will be (".concat(myagefatertenyear, ") and my sibling age will be (").concat(siblingageafterten, ") "));
    }
    function SAge(AgeDiff) {
        var sib = age - AgeDiff;
        return (sib);
    }
    function aftertenyear() {
        myagefatertenyear = age + 10;
        siblingageafterten = findage + 10;
    }
}
