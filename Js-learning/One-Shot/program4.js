// String

function countVowel(str){
    let count = 0;

    for(let i = 0 ; i < str.length; i ++ ){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            count ++;
        }
    }
    console.log(count);
}

countVowel("ayusharyan");


function numOfVowel(str1){
    let count = 0;
    for (const char of str1){
        if ( char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count ++;
        }
    }
    console.log(count);
}

numOfVowel("bittukumar")