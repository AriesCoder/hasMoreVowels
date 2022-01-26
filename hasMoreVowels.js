let word = 'borIIIIIIIIIng'

function hasMoreValue(word){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let count = 0
    //counts the vowel in word
    for (j in word){
        for (i in vowels){
            if(word[j].toLowerCase() === vowels[i]){
                    count+=1
            }
        }
    }
    //compare which one has more
    let consCount = word.length - count
    if(consCount > count){
        return false
    }else if(consCount < count){
        return true
    }else{
        return `The word ${word} has the same number of wovels and consonants`
       
    }
}
console.log(hasMoreValue(word))