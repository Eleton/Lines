import { ValidatorFn, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, timer, of } from 'rxjs';
import { switchMap, tap, map, catchError, first } from 'rxjs/operators';
import { RoomService } from './room.service';

export function forbiddenNameValidator(roomService: RoomService): AsyncValidatorFn {
  console.log('FORBIDDEN NAME VALIDATOR');

  return (control: AbstractControl):
    Promise<ValidationErrors | null> |
    Observable<ValidationErrors | null> => {
    // const forbidden = nameRe.test(control.value);
    // return forbidden ? {'forbiddenName': {value: control.value}} : null;
    // return roomService.doesRoomExist(control.value).pipe(
    //   map(e => e ? ({ unique: true }) : null),
    //   tap(e => console.log(e)),
    //   catchError(() => null)
    // );
    return timer(7500).pipe(
      switchMap(() => roomService.doesRoomExist(control.value).pipe(
        map(exists => exists ? ({ unique: true}) : null),
        catchError(() => null),
      )),
      first()
    );
  };
}
