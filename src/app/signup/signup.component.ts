import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'signup',
  template: `
  <div class="container-fluid">
  <h1>Employee Enrollment Form </h1>
  <form #userForm="ngForm"  > 
    
    <div class="form-group">
      <label>Name</label>
      <input type="text" #name="ngModel" 
       class="form-control" [class.is-invalid]="name.invalid && name.touched" name="name" ngModel>

    </div>

    <div class="form-group">
        <label>Email</label>
        <input type="email"  required class="form-control" name="email"ngModel>
      </div>
      <div class="form-group">
          <label>Phone</label>
          <input type="tel" #phone="ngModel"   pattern="[0-9]{10}" 
          class="form-control" name="phone" ngModel >
        </div>
        <div class="form-check mb-3">
            
          <input type="checkbox" class="form-check-input"  name="checkbox" ngModel >
          <label class="form check input">Send me promotional offers</label>
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
  </form>

</div>
  `,
  styles: []
})
export class SignupComponent implements OnInit {
 

  constructor(){}

  ngOnInit() {
  }

}
