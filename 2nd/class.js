const stud1 = {
  stdNo: 1001,
  stdName: "박예인",
  score: 100,
  setScore: (score) => {
    this.score = score;
  },
  getScore: () => this.score,
};

stud1.setScore(90);
console.log(stud1.getScore());

class Student {
  constructor(stdNo, stdName, score) {
    this.stdNo = stdNo;
    this.stdName = stdName;
    this.score = score;
  }

  setScore(score) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }
}
const stud2 = new Student(1002, "김수연", 90);
const stud3 = new Student(1003, "함수고", 80);
console.log(stud1.stdNo, stud2.stdNo);
