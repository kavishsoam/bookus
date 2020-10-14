import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  name: any;
  checked: boolean = false;
  state: any = 'Inactive';
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.dialogRef.disableClose = true;   
    }

  ngOnInit() {
    console.log('modal passing Data ===>', this.data)
  }
  onNoClick(): void {
    this.dialogRef.close({status: 'close'});

  }
  save() {
    console.log('save the task ===>', {name:this.name,type: 'save',status:this.state});
    if (!this.name) {
      alert('Please fill the name field.')
      return;
    } 
    this.dialogRef.close({name:this.name,type: 'save',status:this.state});
  }

  onChange(event) {
    console.log('onchange ===>', this.name);
  }

  onCheckChange(event) {
    console.log('onchange ===>', event);
    if (event.checked == true) {
      this.state = 'Active';
    } else {
      this.state = 'Inactive'
    }
  }

}
