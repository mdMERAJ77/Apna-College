function getData(getId, getNextData){
    setTimeout(()=>{
        console.log("data",getId);
        if(getNextData){
            getNextData();
        }
    },4000)
}

//callback Hell
console.log("fetching data 1 ...")
getData(1,()=>{
    console.log("fetching data 2 ...");
    getData(2, ()=>{
        console.log("fetching data 3 ...");
        getData(3,()=>{
            console.log("fetching data 4 ...");
            getData(4);
        });
    });
});