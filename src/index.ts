var Gun = require("gun");
const readline = require("readline");
import sleep from "./sleep";

var gun = Gun();

gun.get('msg').put({ someOtherProp: "this is a msg" });

gun.get('msg').on(function(data, key) {
    // log the entire msg object and it's properties
    console.log("new message appeared: " + JSON.stringify(data));
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

const question = (str) => new Promise(resolve => rl.question(str + "\n", resolve));

(async()=>{
    await sleep(2000);
    await readUserInput();
})(); 

async function readUserInput(){
    let userMsgAnswer = await question("plz input a message... ");
    gun.get('msg').put({ contents: userMsgAnswer });
    console.log("thanks for sharing a msg");
    await sleep(2000);
    return readUserInput();
}