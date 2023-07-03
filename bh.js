function solution(reviews,positivewords, negativewords, intensifiers){
    let result = [];

    reviews.forEach(r=>{
            let w = r.split(' ');
            intense = 0;
            posi = 0;
            nega = 0;
            for (let i = 0; i < w.length; i++) {
                const e = w[i];
                if(intensifiers.includes(e) ) intense++
                if(positivewords.includes(e) ){
                    posi = posi+ intense+ 1;
                    intense = 0;

                } 
                if(negativewords.includes(e) ){
                    nega = nega+ intense+ 1;
                    intense = 0;

                } 
                
            }
            if(posi>nega) result.push('positive')
            if(posi<nega) result.push('nega')
            if(posi == nega) result.push('neutral')

    })
return result

}



let reviews = ["very purple and good", "very very bad one of the worst", "good but worse than analoque",""];
let positivewords = ["good","best"] ;
let negativewords = ["bad","worse","worst"];

let  intensifiers = ["very"]; 
console.log(solution(reviews,positivewords, negativewords, intensifiers));

// // ['positive"
// "negative"
// "neutral",
// "neutral"