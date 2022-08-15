function quizApp(response){
    const ques = [
        { 
            "id": 1,
            "question":"What does CPU stand for?",
            "options":["Central Process Unit","Central Processing Unit","Computer Personal Unit","Central Processor Unit"],
            "answer":2
        },
        { 
            "id": 2,
            "question":"What does the \"MP\" stand for in MP3?",
            "options":["Music Player","Moving Picture","Multi Pass","Micro Point"],
            "answer":2
        },
        {
            "id": 3,
            "question": "What was the name of the security vulnerability found in Bash in 2014?",
            "options":["Heartbleed","Bashbug","Shellshock","Stagefright"],
            "answer":3
        },
        {
            "id": 4,
            "question": "What does AD stand for in relation to Windows Operating Systems? ",
            "options":["Active Directory","Alternative Drive","Automated Database","Active Department"],
            "answer":1
        },
        {
            "id": 5,
            "question":"HTML is what type of language?",
            "options":["Macro Language","Markup Language","Programming Language","Scripting Language"],
            "answer" :2
        },
    ];
    let index = 0, temp = [];

    for(let i =0; i<ques.length;i++){
        // index = Math.floor(Math.random()*5);
        // temp.push(index);
        // for(let check of temp){
        //     if(index==temp[check]) continue;
        // }
        console.log(ques[i].question);
        for(let j=0; j<ques.length;j++){
            //console.log(index);
            console.log(`${j+1}.${ques[i].options[j]}`);
        }
        console.log('\n');
    }

    // ANSWER CHECKING
    let sum = 0;
    for(let i =0; i<response.length;i++){
        if(response[i]==ques[i].answer){
            sum += 5;
        }
    }
    //         Marks & Grade Calculation              
    let result_grade = ['Excellent','Very Good','Good', 'Fair','Fail'];
    let result_marks = sum;
    console.log(`You scored ${result_marks} marks`);
    if(result_marks<=6){
        console.log(result_grade[4]);
    }
    else if(result_marks<=11 && result_marks>=7){
        console.log(result_grade[3]);
    }
    else if(result_marks<=14 && result_marks>=12){
        console.log(result_grade[2]);
    }
    else if(result_marks<=17 && result_marks>=15){
        console.log(result_grade[1]);
    }
    else {
        console.log(result_grade[0]);
    }
    
}
let response = [2,2,3,1,2];
quizApp(response);