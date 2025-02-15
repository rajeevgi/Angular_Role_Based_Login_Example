import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userobj : any = {
    username : '',
    password : '',
    role : ''
  }

  constructor(private apiService : ApiService, private router : Router) {}

  onLogin(){
    this.apiService.login(this.userobj).subscribe(( res : any) => {
      localStorage.setItem("LocalUserData", JSON.stringify(this.userobj));
      this.router.navigateByUrl("app-layout");
    });
  }

}
