import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

export interface Role{
  id:string,
  name: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  roles: Role[] = [
    {id: '0', name: 'admin'},
    {id: '1', name: 'user'},
  ]
  Title = ''
  index = 0
  name = ''
  btn=''
  isEdit = false
  isDelete = false
  // constructor() {}
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private employeeService: EmployeeService) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  employeeForm = new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(10)]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    role: new FormControl('',[Validators.required]),
    editRole: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.minLength(10), Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
  },
  {
    validators: [this.match('password', 'confirmPassword')]
  })

  ngOnInit(): void {
    this.isEdit = this.data.isEdit
    this.isDelete = this.data.isDelete
    if (this.data.isEdit == true && this.data.User != undefined && this.data.id != undefined){
      this.Title = 'Edit Employee';
      this.btn='Update'
      if (this.data.User.role === "Admin"){
        this.index = 0
      } else {
        this.index = 1
      }
        this.employeeForm.patchValue({
          title: this.data.User.title,
          firstName: this.data.User.firstName,
          lastName: this.data.User.lastName,
          editRole: this.data.User.role,
          email: this.data.User.email,
        });
    }else if(this.data.isDelete && this.data.id != undefined){
      this.name = this.data.User.firstName + " " + this.data.User.lastName;
      this.Title = 'Delete Employee';
    }else{
      this.Title = 'Add Employee';
      this.btn = "Create;"
    }
  }

  get f (){ return this.employeeForm.controls}

  // MustMatch(controlName: string, matchingControlName: string){
  //   return(formGroup: AbstractControl)=>{
  //     const control = formGroup.value.password
  //     const matching = formGroup.value.confirmPassword;
  //     if(matching.errors && !matching.errors.MustMatch){
  //       return
  //     }
  //     if(control.value !== matching.value){
  //       matching.setErrors({MustMatch:true});
  //     }
  //     else{
  //       matching.setErrors(null);
  //     }
  //   }
  // }
  match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl!.errors && !checkControl!.errors.matching) {
        return null;
      }

      if (control!.value !== checkControl!.value) {
        controls.get(checkControlName)!.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }


  get title(){
    return this.employeeForm.get('title')
  }

  get firstName(){
    return this.employeeForm.get('firstName')
  }
  get lastName(){
    return this.employeeForm.get('lastName')
  }
  get role(){
    return this.employeeForm.get('role')
  }

  get editRole(){
    return this.employeeForm.get('editRole')
  }

  get email(){
    return this.employeeForm.get('email')
  }

  get password(){
    return this.employeeForm.get('password')
  }
  get confirmPassword(){
    return this.employeeForm.get('confirmPassword')
  }



  onSubmit(){
    if(this.isEdit){
      this.employeeUpdate()
    }else{
      this.employeeAdd()
    }
  }

  employeeAdd(){
    this.employeeService.postEmployee(this.employeeForm.value).subscribe(
      (res) => {
        if (res.message) {
          alert(res.message);
          this.employeeForm.reset();
          this.dialogRef.close([]);
        }
      },
      (err) => {
          alert(err);
      }
    );
    // console.log(this.employeeForm.value);

    // if(!this.inputTodo?.invalid){
    //   const todo:Todo = {
    //     context: this.todoForm.value.inputTodo,
    //     completed: false,
    //     edited: false
    //   };
    //   this.newTodoEvent.emit(todo)
    // }
  }

  employeeUpdate(){
    this.employeeService.putEmployee(this.data.id,this.employeeForm.value).subscribe(
      (res) => {
        if (res.message) {
          alert(res.message);
          this.employeeForm.reset();
          this.dialogRef.close([]);
        }
      },
      (err) => {
          alert(err);
      }
    );
  }

  employeeDelete(){
    this.employeeService.deleteEmployee(this.data.id).subscribe(
      (res) => {
        if (res.message) {
          alert(res.message);
          this.employeeForm.reset();
          this.dialogRef.close([]);
        }
      },
      (err) => {
          alert(err);
      }
    );
  }
}

