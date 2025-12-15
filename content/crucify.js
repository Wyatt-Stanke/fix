let centerL = screen.width * .5;
let centerT = screen.height * .5;

let i;
let count = 0;
let loop;

function crucify(){
  // scale
//  console.log(scaleFactor);

  
  
//  
  
  const CHARS_TO_SHOW = 80;
   $.getJSON('https://wyatt-stanke.github.io/fix/bible.json', function(data) {
    var bible = data;
     i = 31102;
     
     
    loop = setInterval(function(){
    history.pushState({}, '', `?=${i}`);
      
//    document.title = i;
//    i++;
    
//    history.pushState({}, '', `?=${bible[i].verse + " — " + bible[i].text}`);
    let verseText = bible[i].text;
      
//    if(verseText.length <= 0){
//      console.log(bible[i].text.length);
//      i--;
//      if(i <= 0){ i = 31103; } // restart
//      return;
//    }
      
      
//    let start =  Math.max(0, verseText.length - CHARS_TO_SHOW);
//    let textToShow = verseText.slice(start);
//      
//      if(textToShow.length < 30){
//        textToShow = bible[i].verse + ": " + textToShow;
//      }

//      if(charIndex == 0){
//        textToShow = bible[i].verse + "——" + textToShow;
//        document.title = bible[i].verse;
//        history.pushState({}, '', `?=${i}`);
//      }
      
      
     document.title = `${bible[i].verse} — ${verseText}`;
//     document.title = textToShow;
//      history.pushState({}, '', `?=${count}`);
      
//      bible[i].text = verseText.substring(0, start);
//      console.log(textToShow, "———",  bible[i].text);
//      count++;
      
      i--;
      
      if(i <= 0){ i = 31103; } // restart
      
  }, 500);
     
     
  });

  
}
