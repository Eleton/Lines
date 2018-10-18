import { ValidatorFn, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, timer, of } from 'rxjs';
import { switchMap, tap, map, catchError, first } from 'rxjs/operators';
import { RoomService } from './room.service';

export function forbiddenNameValidator(roomService: RoomService): AsyncValidatorFn {

  return (control: AbstractControl):
    Promise<ValidationErrors | null> |
    Observable<ValidationErrors | null> => {
    return timer(2500).pipe(
      switchMap(() => roomService.doesRoomExist(control.value).pipe(
        map(exists => exists ? ({ unique: true}) : null),
        catchError(() => null),
      )),
      first()
    );
  };
}
