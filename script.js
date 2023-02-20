function Areneyow() {
    radioIDs = Array.from(new Array(40), (x, i) => i + 153);
    radioIDs = radioIDs.map(i => 'Q' + i);
    
    while(true) {
        let inp = prompt("Good day, Atenean. Please enter weights for the score randomizers totalling 100. For example, if you want the score to only randomize between 4 and 5, enter \"0 0 0 50 50\"; 1 to 5 equally, enter \"20 20 20 20 20\"; 1, 3, or 5 equally, enter \"33 0 33 0 33\". This message will go away after correct input.");
        wTemp = inp.split(' ').map(Number);
        wSum = inp.split(' ').map(Number).reduce((a, b) => {return a+b;}, 0);
        
        if(wTemp.length==5 && wSum==100 || wSum==99){break;}
    }
    
    let w = [0];
    for(let i=0; i<5; i++){w.push(wTemp[i]+w[i]);}
    
    for(let i=0; i<radioIDs.length; i++){
        let rand = Math.floor(Math.random()*100+1);
        let value = 0;
        for(let i=0; i<5; i++){if(rand>=w[i] && rand<=w[i+1]){value = i+1;}}
        
        try {
            let radio = document.getElementsByName(radioIDs[i]);
            radio[value].checked = true;
        } catch {continue}
    }
}
 
Areneyow()