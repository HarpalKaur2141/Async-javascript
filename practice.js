
async function num(){
    throw "weak connection";
    return num;
    console.log(num);
}
num()
.then(() => {
    console.log("Your answer is getting ready");
    console.log("Your answer is", result);
})

 .catch((error) => {
        console.log("Wrong number");
        console.log("Wrong number", error);
    });

async function demo(){
 
    return "hello";
}
demo()
.then(() => {
    console.log("Promise was resolved");
})
.catch((err) => {
    console.log("Promise was rejected");
})
 
