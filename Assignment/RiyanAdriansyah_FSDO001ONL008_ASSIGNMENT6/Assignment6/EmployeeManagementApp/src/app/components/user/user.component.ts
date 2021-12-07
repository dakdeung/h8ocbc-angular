import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  heads: string[] = ['Id', 'Title', 'FirstName', 'LastName', 'Email', 'Role', 'Action'];
  data : User[] = []


  @Output() itemEvent = new EventEmitter<string>();

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.employeeService.getUsers().subscribe(data => this.data = data);

  };

  postEmployee(data: any){
    // console.log(data);
    this.employeeService.postEmployee(data).subscribe(
      (res) => {
        if (res.message) {
          alert(res.message);
        }
      },
      (err) => {
          alert(err);
      },
    );
  }

  openDialog(isEdit:boolean, isDelete:boolean, user?:any, id?:number){
    console.log(isEdit, isDelete, user);

    let dialogRef = this.dialog.open(DialogComponent, {data:{isEdit: isEdit, isDelete: isDelete,User: user,id : id}});

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    })
  //   this.dialog.open(DialogComponent)
  //  .afterClosed()
  //  .subscribe(() => this.refreshParent());
  }

}
