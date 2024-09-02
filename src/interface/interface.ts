export interface IUser {
  name: string;
  age: number;
  country: string;
  occupation: string;
  sex: "male" | "female"; // Assuming only male and female are used
  image: string;
  id: string;
}
export interface IUserItemProps {
  user: IUser;
  index: number;
  // innerRef?: React.RefObject<HTMLDivElement>;
}
