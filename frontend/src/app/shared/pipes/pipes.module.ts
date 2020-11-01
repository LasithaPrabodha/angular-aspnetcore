import { NgModule } from '@angular/core';
import { PhoneNumberPipe } from './phone.pipe';

@NgModule({
  declarations: [PhoneNumberPipe],
  exports: [PhoneNumberPipe],
})
export class PipesModule {}
