import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //Subject provides subscription to the data - therefore each component (if implemented) handles with most updated data
  userChanged = new Subject<User[]>();

  private users: User[] = [
    new User(
      "Garry",
      "Oxford",
      "Garry Oxford is a Loan Officer at XYZ Bank, where Lorie processes loan applications from start to finish, " +
      "including mortgage refinancing and educating clients about their different financing options."
    )
  ];

  getUser(index: number){
    return this.users[index];
  }
  getUsers(){
    return this.users;
  }

  updateUser(index: number, newUser: User){
    this.users[index] = newUser;
    this.userChanged.next(this.users.slice());
  }

  constructor() { }
}
