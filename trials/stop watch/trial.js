var startTime = 0;
var endTime = 0;
var duration = 0;
var running = false;
var myStartTime = 0;
var myStopTime = 0; 
var h,s,m = 0;
start = function () {
    if (running) {
        throw new Error("Stopwatch is already running");
    }
    running = true;
    startTime = new Date();
    var h = startTime.getHours();
    var m = startTime.getMinutes();
    var s = startTime.getSeconds();
    var x = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    return  myStartTime = h + ':' + m + ':' + s + ' ' + x;
};

stop = function () {
    if (!running) {
        throw new Error("stopWatch already been stopeed");
    }

    running = false;
    endTime = new Date();
    // console.log(endTime);
    var h = endTime.getHours();
    var m = endTime.getMinutes();
    var s = endTime.getSeconds();
    var x = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    myStopTime = h + ':' + m + ':' + s + ' ' + x;
    document.getElementById('stop-timer').innerHTML = myStopTime

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    // console.log(duration);
    return duration += seconds;
};

reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
};




document.getElementById('start').addEventListener('click', function () {
    document.getElementById('timer').innerHTML = start();
});

document.getElementById('stop').addEventListener('click',function(){
    document.getElementById('diff').innerHTML = stop();
});

document.getElementById("reset").addEventListener('click',function(){
    clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
})