    var n=new Date()
    hours=n.getHours().toString().padStart(2,'0');
    minutes=n.getMinutes().toString().padStart(2,'0');
    seconds=n.getSeconds().toString().padStart(2,'0');

    pr=`${hours}:${minutes}:${seconds}`

    if(hours>12){
        console.log(pr+" PM")
    }
    else{
        console.log(pr+" AM")
    }
    