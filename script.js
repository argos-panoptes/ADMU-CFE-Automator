function ACFEA() {
    radioIDs = Array.from(new Array(40), (x, i) => i + 153);
    radioIDs = radioIDs.map(i => 'Q' + i);

    alert("The following prompts will ask you to enter the probability for a given score to be inputted in the evaluation form. These probabilities must be whole numbers with no decimal points. The total must either be 100 or 99 (if split equally between 3 options).");
    weights = [];
    wSum = 0;
    while(!wSum){
        while(weights.length<5) {
            wInput = prompt("Enter probability for a score of "+ String(weights.length+1));
            if(wInput===null){
                break;
            }
            weights.push(parseInt(wInput));
            wSum += parseInt(wInput);
        }
        if(wSum==100 || wSum==99){
            break;
        }
        alert("Total weight must be 100 or 99 (if split between 3 outcomes).");
        weights = [];
        wSum = 0
    }

    wRange = [1];
    for(i=0; i<5; i++){
        wRange.push(weights[i]+wRange[i]);
    }
    console.log(wRange);
    for(i=0; i<radioIDs.length; i++){
        rand = Math.floor(Math.random()*100+1);
        value = 0;
        for(j=0; j<6; j++){
            if(rand>wRange[j] && rand<wRange[j+1]){
                value = j+1;
                console.log(value + ", " + rand);
            }
        }
        
        try {
            radio = document.getElementsByName(radioIDs[i]);
            radio[value].checked = true;
        } catch {
            continue;
        }   
    }
}
 
ACFEA()

// TODO Integrate ChatGPT for qualitative answers