function loveCalc(male ,female){
    const man =Math.floor(Math.random()*100)
    const woman = Math.floor(Math.random()*100)
    const Average =(man + woman)/2

    setTimeout(()=>{
        console. log(`the average of ${male}is ${man},the average of ${female}is${woman}.The main average is ${Average}`)
    },1000)
    setTimeout(()=>{
        if (Average >=70){
            console .log(`you are  match`)
        }

        else if(Average >=60){
            console.log(`you are sligthly match`)
        }
        else if (Average>=50){
            console .log(`you are not ok `)
        }
        else if (Average>=40){
            console.log (`you will not marry`)
        }
        else if(Average>=30){
            console.log(`you will marry for life`)

    }
    else if (Average>=20){
        console.log(`dont marry`)
        }
}, 2000)
    }
    loveCalc ()("John", "Favour")
