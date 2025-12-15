let centerL = screen.width * 0.5;
let centerT = screen.height * 0.5;

let i;
let count = 0;
let loop;

function crucify() {
  // scale
  //  console.log(scaleFactor);

  for (let j = 0; j < 5; j++) {
    window.open(
      `https://wyatt-stanke.github.io/fix/text.html`,
      `TEXT${j}`,
      `popup,width=400,height=200,left=${centerL - 200},top=${
        centerT + 220 + j * 220
      }`
    );
  }

  const CHARS_TO_SHOW = 80;
  $.getJSON("https://wyatt-stanke.github.io/fix/bible.json", function (data) {
    var bible = data;
    i = data.length - 1;

    loop = setInterval(function () {
      history.pushState({}, "", `?=${i}`);

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

      if (i <= 0) {
        clearInterval(loop);
      }
    }, 2);
  });
}
