const word = process.argv[2];
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
let counter = 0;
for (let i = 0; i < word.length; i++) {
    const curWord = word[i];
    if(vowels.includes(curWord)){
        counter++;
    }   
}

console.log(`Il numero di vocali presenti nella parola "${word}" è: ${counter}`);
