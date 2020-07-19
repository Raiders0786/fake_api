
class Stopwatch {
    constructor() {
        var startTime, endTime, duration = 0;
        let running = false;


        this.start = function () {
            if (running) {
                throw new Error("Stopwatch is already running");
            }
            running = true;
            startTime = new Date();
            document.getElementById("timer").innerHTML;
        };

        this.stop = function () {
            if (!running) {
                throw new Error("stopWatch already been stopeed");
            }
            running = false;
            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };
        this.reset = function () {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;
        };

        // Object.defineProperty(this,'duration',{
        //     get: function(){
        //         return duration;
        //     }
        // });
    }
}

let x = new Stopwatch();
let y = x.startTime;
document.getElementById("timer").innerHTML ='y';