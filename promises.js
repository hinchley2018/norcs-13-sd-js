function wellingtonEats(hamburger, price, timeToCook){
    //i'll pay you tuesday I promise :) 
    //promise starts as pending
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            // debugger
            console.log("its tuesday")
            if(price < 0){
                reject("Negative price not allowed")
            }
            console.log("Paid", price, "for a ", hamburger)
            //resolve only takes one param, so if you need more data pass an object
            
            //marks the promise as completed
            resolve({hamburger, price})
        }, timeToCook)
        
    })
}

let arnoldPromise = wellingtonEats("Arnold Hama Whopper",3.50, 3000)
//guaranteed it is done processing, here is my result
//then === success / finished
arnoldPromise.then(function(promiseResult){
    console.log("resolved", arnoldPromise, promiseResult)
})
// let cowfishPromise = wellingtonEats("Cowfish Whopper",3.75, 2000)

// //.catch is rejected / failure
// let negativePromise = wellingtonEats("Neg Whopper",-700, 2000).catch(() => {
//     console.error("You tried to get us to pay you")
// })

//no args just pull the data from wherever it is
function getPizzaToppings(store = undefined){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(store !== undefined && store.location === "Dallas"){
                let toppings = ["blue cheese", "blue pineapples", "blue spinach", "blue mushrooms","bacon"]
                resolve(toppings)    
            }
            else {
                let toppings = ["cheese", "pineapples", "spinach", "mushrooms","bacon"]
                resolve(toppings)    
            }
        }, 1500)
    })
}

function getPizzaPrices(){
    return new Promise(function(resolve, reject){
        //we don't know how long to load prices
        setTimeout(() => {
            let prices = [
                {
                    price: 10,
                    size: 'large'
                },
                {
                    price: 6,
                    size: 'medium'
                },
                {
                    price: 4,
                    size: 'mini'
                }
            ]   
            resolve(prices)
        }, 2000)
    })
}

function getStores(){
    return new Promise(function(resolve, reject){
        //we don't know how long to load prices
        setTimeout(() => {
            let stores = [
                {
                    location: "Dallas",
                    hours: 'M-F 8-9pm'
                },
                {
                    location: "Houston",
                    hours: 'M-F 8-9pm'
                }
            ]   
            resolve(stores)
        }, 2000)
    })
}

function getOrders(){
    return new Promise(function(resolve, reject){
        //we don't know how long to load prices
        setTimeout(() => {
            let orders = [
                {
                    price: 10,
                    size: 'large',
                    toppings: ["pep","spinach"]
                },
                {
                    price: 6,
                    size: 'medium',
                    toppings: []
                },
                {
                    price: 4,
                    size: 'mini',
                    toppings: ["pineapple"]
                }
            ]   
            resolve(orders)
        }, 2000)
    })
}

//look at the toppings we got toppings
getPizzaToppings().then((toppings) => {
    console.log("these are the toppings you can choose from", toppings)
})
//wait to resolve the prices
getPizzaPrices().then((prices) => {
    console.log("Your pizza sizes are", prices)
})


//chaining is good when data depends on other promises to resolve
//can't get toppings without a valid store
getStores().then(stores => {
    console.log(stores)
    //returning a function
    return getPizzaToppings(stores[0])//dallas
})
.then(toppings => {
    console.log(toppings)
})
