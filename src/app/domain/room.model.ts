export interface Room {
  id: string;
  name: string;
  password: string;
  date: Date;
}

export interface Line {
  id: string;
  content: string;
  time: Date;
  used: false;
}
