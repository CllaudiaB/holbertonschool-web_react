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
