//guess random number games
const Min=1
const Max=100
const result=Math.floor(Math.random()*(Max-Min+1));
let run  = true;
let gues;

while(run){
     gues=window.prompt(`enter a number between ${Min}-${Max}`);
    gues=Number(gues);
    if(isNaN(gues)){
        window.alert('enter the valid number');
    }
    else if(gues<1 || gues>100){
        window.alert('enter the valid number');
    }
    else{
        
        if(gues<result){
            window.alert('to low !try again')
        }
        else if(gues>result){
            window.alert('to high !try again')
        }
        else{
          window.alert(' congra !!!!!!! you get the Number');
          run=false;
        }
    }

}


