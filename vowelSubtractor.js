function disemvowel(str) {
    let vowels = 0
    let strFinal = str
    for (let i=0; i < str.length; i++){
        console.log(i)
        let letter = str[i]
        
        let letterValue = letter.toLowerCase()
        if (letterValue == "a" || letterValue == "i" || letterValue == "e" || letterValue == "o"|| letterValue == "u"){
            console.log(letter)
            strFinal = strFinal.replace(letter, '')
        } 
    }
  return strFinal;
}



console.log(disemvowel("Hello Worlde"))