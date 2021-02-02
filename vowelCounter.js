function vowelCounter(string){
    let vowels = 0
    for (let i=0; i < string.length; i++){
        let letter = string[i]
        if (letter === "i" || letter === "e" || letter === "o"|| letter === "u"){
            console.log(letter)
            vowels ++
        } 
    }

    console.log(vowels)
}

vowelCounter("Counter")