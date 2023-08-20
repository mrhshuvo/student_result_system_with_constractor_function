const finalResult  = new Result({
    name:"Mrh_Shuvo",
    roll: 1, 
    age: 24, 
    skill: "MERN Stack Developer",
    location: "Bogura"
},{

    ban: 83, eng: 85, math: 88, s: 85, ss: 89, reli: 90

});

console.log(` Final Result: (${finalResult.finalsResult()}) CGPA: (${finalResult.cgpa()}) Grade: (${finalResult.finalGrade()})`);