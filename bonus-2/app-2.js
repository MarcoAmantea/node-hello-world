const word = process.argv[2];
const vowels = ["a","e","i","o","u"];
let counter = 0;
for (let i = 0; i < word.length; i++) {
    const curChar = word[i].toLowerCase();
    if(vowels.includes(curChar)){
        counter++;
    }   
}

console.log(`Il numero di vocali presenti nella parola "${word}" è: ${counter}`);
