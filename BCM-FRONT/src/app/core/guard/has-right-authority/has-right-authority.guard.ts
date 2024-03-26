import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../../service/authentication/authentication.service";

export const hasRightAuthorityGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthenticationService);
  return authService.hasRightAuthority(route.data["authority"]);
};
