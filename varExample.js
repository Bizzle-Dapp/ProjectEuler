someHorribleShit = () => {
    //  change let to var. Go on, i dare you.
    for(let i = 0; i < 10; i++){
        console.log(i);
        for(let i = 6; i < 10; i++){
            console.log(i);
        }
    }
}

console.log(someHorribleShit());