class Student {
  constructor(public readonly name: string, public age: number) {}
}

const ali = new Student("ali", 23);
// we can not access ali.name because it is readonly
// ali.name = 'umar'
console.log(ali.name, ali.age);

// this is a one of the way to implement singleton pattern
class StudentList {
  private students: Student[] = [];

  static instance: StudentList = new StudentList();
  static addStudent(student: Student): void {
    StudentList.instance.students.push(student);
  }
  getStudents() {
    return this.students;
  }
  private constructor() {}
}

StudentList.addStudent(ali);
console.log(StudentList.instance.getStudents());
// we can not instantiate StudentList because constructor is private
// we can only acess one and only instace instantiates in class
// const umar = new StudentList();
