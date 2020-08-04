
class Stopwatch {
    startTime = 0;
    endTime = 0;
    duration = 0;
    running = false;
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
        var myStartTime = h + ':' + m + ':' + s + ' ' + x;
    }
    stop = function () {
        if (!running) {
            throw new Error("stopWatch already been stopeed");
        }
        running = false;
        endTime = new Date();

        var h = startTime.getHours();
        var m = startTime.getMinutes();
        var s = startTime.getSeconds();
        var x = h >= 12 ? 'pm' : 'am';
        h = h % 12;
        h = h ? h : 12;
        m = m < 10 ? '0' + m : m;
        var myStopTime = h + ':' + m + ':' + s + ' ' + x;

        const seconds = (myStartTime.getTime() - myStopTime.getTime()) / 1000;
        duration += seconds;
    };
    reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
};

let display = new Stopwatch();


document.getElementById('start').addEventListener('click', function () {
    document.getElementById('timer').innerHTML = display.myStartTime
})