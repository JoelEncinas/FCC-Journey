const key = 13;
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function rot13(str) {
  let splitSentence = str.split('');
  let decipher = [];
  
  for(let i = 0; i < splitSentence.length; i++){
    if(alphabet.indexOf(splitSentence[i]) === -1){
      decipher.push(splitSentence[i]);
    } else {
      decipher.push(alphabet[alphabetRot13(alphabet.indexOf(splitSentence[i]))]);
    }
  };

  return decipher.join('');
}

function alphabetRot13(num){
  if(num >= key) {
    return num - key;
  }  
  return num - key + alphabet.length;
}


rot13("SERR CVMMN!");