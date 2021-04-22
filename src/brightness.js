const brightness = require('brightness');
const { BrowserWindow } = require('electron')
const remoteMod= require('electron').remote




brightness.get().then(level => {
	console.log(level);
    document.getElementById("myRange").value=level*100;
    document.getElementById("bi").innerHTML=Math.round(level*100);
})
    



function hello(){
    let ulevel = document.getElementById("myRange").value/100;
    console.log(ulevel);
    brightness.set(ulevel).then(() => {
	console.log('Changed brightness to ' + ulevel*100 + '%');
    document.getElementById("bi").innerHTML=Math.round(ulevel*100);
    
    console.log(ulevel*100);
    });
}

//close button



function closeWin(){
    let win = remoteMod.getCurrentWindow() ;
    win.close();
    console.log("close button is clicked")
}

