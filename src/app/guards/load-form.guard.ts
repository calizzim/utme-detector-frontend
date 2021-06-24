import { LoadResourceService } from './../services/load-resource.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadFormGuard implements CanActivate {
  constructor(private service:LoadResourceService) {}
  async canActivate(route: ActivatedRouteSnapshot) {
    await this.service.loadTemplate(route.data.templateName)
    return true;
  }
}
