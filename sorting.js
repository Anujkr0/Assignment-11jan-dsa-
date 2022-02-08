let max_char = 26;
function sortstring(str)
{
    let letters = new Array(max_char);
    for(let i=0; i<max_char; i++){
        letters[i]=0;
    }
    for(let x=0; x<str.length; x++){
        letters[str[x].charCodeAt(0) - 'a'.charCodeAt(0)]++;

    }
    for(let i =0; i<max_char; i++){
        for(let j=0; j<letters[i];j++){
            console.log(String.fromCharCode(i + 'a'.charCodeAt((0))));


        }
    }
}
sortstring("Anuj");