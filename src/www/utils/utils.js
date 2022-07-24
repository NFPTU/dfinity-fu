export const getRemainingTime = (time) => {
    const remainTime =  Number(time/BigInt(Math.pow(10, 9))) - (Date.now()/Math.pow(10,3)) 
   return remainTime >0 ?remainTime: 0
}

export const toHHMMSS = function (time) {
    const second = Number(time/BigInt(Math.pow(10, 9)))
    var sec_num = parseInt(second, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return  minutes + 'm' + seconds + 's';
}