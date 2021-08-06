
// const EventEmitter = require("events");
// const event = new EventEmitter();


// event.on("taking input", () => {
//     console.log("hello");
// })

// event.emit("taking input")

var arr = ["harry potter", "lords of the rings", "game of throns"];
const readline = require("readline");


const readline1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})

function run() {
    readline1.question("\nPress 1 to see all books \npress 2 for add new book \npress 3 for exit \n\nchoice option : ", function (n) {
        if (n == 1) {
            console.log("\n");
            for (let i = 0; i < arr.length; i++){
                console.log(`${i+1}. ${arr[i]}`);
            }
            run();
        } else if (n == 2) {
            readline1.question("type your book Name : ", function (book) {
                arr.push(book)
                console.log(`\nyour ${book} book added successfully `);
                run();
            })
        
        } else if (n == 3) {
            readline1.question("\nAre you sure you want to quit \n\npress Y to quit\npress anythink else to stay\n\nchoice option : ", function (y) {
                if (y == "y") {
                    readline1.close()
                } else {
                    run();
                }
            })
        } else {
            console.log("You have selected an invalid entry so please press from 1, 2 or 3.");
            run();
        }
    })
}


readline1.on("close", function () {
    console.log("\nThanks for visiting\nbye bye")
})

run();