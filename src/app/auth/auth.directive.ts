import { Directive, inject, effect, TemplateRef, ViewContainerRef } from '@angular/core';
import { input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<Permission>({alias: 'appAuth'});

  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  constructor() { 

    effect(() => {

      if(this.authService.activePermission() === this.userType()){
        //this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
        console.log('SHOW ELEMENT');
      } else {
       this.viewContainer.clear();
        //console.log('HIDE ELEMENT');
      }
      // console.log('AuthDirective - userType = ', this.userType());
      // console.log('AuthDirective - activePermission = ', this.authService.activePermission());
    });
  }

}
