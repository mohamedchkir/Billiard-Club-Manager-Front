import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ClubService} from "../../service/club/club.service";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";

export const clubFoundGuard: CanActivateFn = (route, state) => {
  const clubService = inject(ClubService);
  const router = inject(Router);
  const id = route.params['id'];

  return clubService.getClubById(id).pipe(
    map(club => !!club),
    catchError(() => of(router.createUrlTree(['/404'])))
  );
};
