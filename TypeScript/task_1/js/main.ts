interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [name: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacher {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacher = function(firstName, lastName) {
    return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
