import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileService} from "./profile.service";
import {User} from "./user.model";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BioModalComponent} from "../shared/bio-modal/bio-modal.component";
import {DetailsModalComponent} from "../shared/details-modal/details.modal.component";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  activeUser: User;
  users: User[];
  subscription: Subscription;


  constructor(private profileService: ProfileService, private modalService: NgbModal) {
  }

  ngOnInit() {
    //Subscribing to the subject - results in getting actual data if something was changed or updated on different component
    this.subscription = this.profileService.userChanged.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.users = this.profileService.getUsers();
    this.activeUser = this.users[0];
  }

  openBioModal() {
    const modalRef = this.modalService.open(BioModalComponent);

    modalRef.componentInstance.user = this.activeUser;

    modalRef.result.then((result) => {
      if (!result) {
        throw new Error('Error occurred - no user available');
      }

      //Update the user
      this.profileService.updateUser(0, result);

    }).catch((error) => {
      console.log(error);
    });
  }

  openDetailsModal() {
    const modalRef = this.modalService.open(DetailsModalComponent);

    modalRef.componentInstance.user = this.activeUser;
    modalRef.componentInstance.mo

    modalRef.result.then((result) => {
      if (!result) {
        throw new Error('Error occurred - no user available');
      }

      this.profileService.updateUser(0, result);

    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

