import {Component, EventEmitter, Input, Output} from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({

  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css'],

})
export class DetailsModalComponent {
  @Input() public user;
  @Output() close = new EventEmitter<void>();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  passBack() {
    this.activeModal.close(this.user);
  }

  onClose(){
    this.close.emit();
  }
}
