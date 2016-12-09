import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent { 

  onSubmit(value: any) {
    console.log(value);
  }

}