type MyFlexibleStudendInfo = {
  name: string;
  [key: string]: string | number;
};

const student: MyFlexibleStudendInfo = {
  name: "ali",
  class: "9th",
  age: 22,
};

interface StudentInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// maping of type
// we send StudentInfo to OptionsFlags
// which converts all types of student to bolean
// here all studentInfoType is boolean

type StudentInfoType = OptionsFlags<StudentInfo>;

// example of mapped type
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};
const listenToObject = <T>(obj: T, listeners: Listeners<T>): void => {
  throw "needs to implement";
};

const ali: StudentInfo = {
  name: "ali",
  age: 13,
};
type StudentInfoListeners = Listeners<StudentInfo>;

listenToObject(ali, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
