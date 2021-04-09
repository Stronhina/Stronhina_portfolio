module.exports = function toReadable (number) {
    //this solve for number less than 1000
    let numberWords;
    let ones = ["",
                " one",
                " two",
                " three",
                " four",
                " five",
                " six",
                " seven",
                " eight",
                " nine",
                " ten",
                " eleven",
                " twelve",
                " thirteen",
                " fourteen",
                " fifteen",
                " sixteen",
                " seventeen",
                " eighteen",
                " nineteen" ];
    let tens = ["",
                " ten",
                " twenty",
                " thirty",
                " forty",
                " fifty",
                " sixty",
                " seventy",
                " eighty",
                " ninety" ];
    
    if (number == 0) {
        return "zero";
    }

    if (number % 100 < 20 ) {
        numberWords = ones[number % 100];
        number = Math.floor(number / 100);
    } else {
        numberWords = ones[number % 10];
        number = Math.floor(number / 10);
        

        numberWords = tens[number % 10] + numberWords;
        number = Math.floor(number / 10);
    }

   if (number == 0) {
       return numberWords.trim();
   }

   return (ones[number] + " hundred" + numberWords).trim();
}
