export interface ReportResponse {
  email: string;
  people: Person[];
  inscriptions: Inscription[];
}

export interface Person {
  name: string;
  lastName: string;
}

export interface Inscription {
  courseId: number;
  inscripcionDate: string;
  certificationDate: string;
  advance: number;
  scoreCourse: number;
  folioCertificate: string;
  anyTest: boolean;
  course: Course;
}

export interface Course {
  name: string;
  imageUrl: string;
  sector: Sector;
}

export interface Sector {
  id: number;
  name: string;
  colorTheme: string;
}
