// await = makes an async function wait for a Promise

async function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File not loaded";
    }
}

async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message)
    }
    catch(error){
        console.log(error)
    }
}

startProcess();