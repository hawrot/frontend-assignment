import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bio-modal',
  templateUrl: './bio-modal.component.html',
  styleUrls: ['./bio-modal.component.css'],
})
export class BioModalComponent {
  @Input() public user;
  @Output() close = new EventEmitter<void>();
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) {
  }

  passBack() {
    this.activeModal.close(this.user);
  }

  onClose() {
    this.close.emit();
  }
}
