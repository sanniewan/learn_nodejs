
module.exports = class Sleeper{
    constructor(){
        this.timeSpan = undefined;
        this.wkndHrs = undefined;
        this.wkdayHrs = undefined;
        this.reqHrs = undefined;
        this.avgHrs = undefined;
    }

    setTimeSpan(timeSpan){
        this.timeSpan = timeSpan;
        return timeSpan;
    }
    setWkndHrs(wkndHrs){
        this.wkndHrs = wkndHrs;
        return this;
    }
    setWkdayHrs(wkdayHrs){
        if(typeof wkdayHrs != "number"){
            console.log("please enter a number")
        }
        this.wkdayHrs = wkdayHrs;
        return this;
    }
    setReqHrs(reqHrs){
        this.reqHrs = reqHrs;
        return this;
    }

    calcAvgHrs(){
        const avghours = ((this.wkndHrs*2) + (this.wkdayHrs*5)) / 7;
        this.avgHrs = avghours;
        return avghours;
    }
    calcSleepDebt(){
       
        
        const idealHrs = this.reqHrs * this.timeSpan * 365;
        const actlHrs = this.calcAvgHrs() * this.timeSpan * 365;
        console.log(this.timeSpan);
        console.log(this.avgHrs);
        console.log(this.reqHrs);
        return idealHrs - actlHrs;
    }
}

