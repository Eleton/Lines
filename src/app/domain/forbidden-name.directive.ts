import { ValidatorFn, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, timer, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { RoomService } from './room.service';

export function forbiddenNameValidator(roomService: RoomService): AsyncValidatorFn {
  return (control: AbstractControl):
    Promise<ValidationErrors | null> |
    Observable<ValidationErrors | null> => {
    // const forbidden = nameRe.test(control.value);
    // return forbidden ? {'forbiddenName': {value: control.value}} : null;
    return timer(500).pipe(
      tap(e => console.log(e)),
      switchMap(() => null)
    );
  };
}
