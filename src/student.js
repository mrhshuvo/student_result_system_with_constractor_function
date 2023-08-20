function Result (student,mark){

   this.name = student.name;
   this.roll = student.roll;
   this.age = student.age;
   this.location = student.location;
   this.skill = student.skill;

   this.ban = mark.ban;
   this.eng = mark.eng;
   this.math = mark.math;
   this.s = mark.s;
   this.ss = mark.ss;
   this.reli = mark.reli;

   this.getGpa = function(sub){

    let gpa;
    let grade;
  
    if (this[sub] >= 0 && this[sub] < 33) {
      gpa = 0;
      grade = "F";
    } else if (this[sub] >= 33 && this[sub] < 40) {
      gpa = 1;
      grade = "D";
    } else if (this[sub] >= 40 && this[sub] < 50) {
      gpa = 2;
      grade = "C";
    } else if (this[sub] >= 50 && this[sub] < 60) {
      gpa = 3;
      grade = "B";
    } else if (this[sub] >= 60 && this[sub] < 70) {
      gpa = 3.5;
      grade = "A-";
    } else if (this[sub] >= 70 && this[sub] < 80) {
      gpa = 4;
      grade = "A";
    } else if (this[sub] >= 80 && this[sub] <= 100) {
      gpa = 5;
      grade = "A+";
    }
    return {
      gpa: gpa,
      grade: grade,
    };

   };

   this.cgpa = function(){

    const totalGpa =
    this.getGpa("ban").gpa + 
    this.getGpa("eng").gpa + 
    this.getGpa("math").gpa +
    this.getGpa("s").gpa +
    this.getGpa("ss").gpa +
    this.getGpa("reli").gpa;

    const cgpa = totalGpa / 6;
    
    return  cgpa.toFixed(2);


   };

   this.finalGrade = function(){

    if(this.ban >= 33 &&
         this.eng >= 33 &&
         this.math >= 33 &&
         this.s >= 33 &&
         this.ss >= 33 &&
         this.reli >= 33){

            if( this.cgpa() >= 0 && this.cgpa() < 1) return "F";
            if( this.cgpa() >= 1 && this.cgpa() < 2) return "D";
            if( this.cgpa() >= 2 && this.cgpa() < 3) return "C";
            if( this.cgpa() >= 3 && this.cgpa() < 3.5) return "B";
            if( this.cgpa() >= 3.5 && this.cgpa() < 4) return "A-";
            if( this.cgpa() >= 4 && this.cgpa() < 5) return "A";
            if( this.cgpa() >= 5) return "A+";

         }else{

            return "F"

         }


   };

   this.finalsResult = function(){

    if(this.ban >= 33 && 
        this.eng >= 33 && 
        this.math >= 33 && 
        this.s >= 33 && 
        this.ss >= 33 && 
        this.reli >= 33){
            return "Passed";
        }else{
            return "Failed";
        };

   };

}