import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userModel=new  User('','',9871234560,true);
  title = 'project2';
    submitted = true;
 constructor (private _enrollmentService : EnrollmentService ){}
  onSubmit(){
    this.submitted= false ;
    this._enrollmentService.enroll(this.userModel).subscribe(data => this.userModel = data);
    
  }
  
}
