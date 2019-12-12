import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  modalRef: BsModalRef;
  user : User = new User();
  errorMsg : ErrorMsg = new ErrorMsg();
  constructor(private modalService: BsModalService) {}


  ngOnInit() {
  }
  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSave(){
    this.errorMsg.name = this.errorMsg.address = '';
    !this.user.name ? this.errorMsg.name = 'Name required': '';
    !this.user.address ? this.errorMsg.address = 'Address required': '';
    if(!this.user.name || !this.user.address){
      return;
    }
  }
}
class User {
  name : string;
  address : string;
}
class ErrorMsg {
  name : string;
  address: string;
}

