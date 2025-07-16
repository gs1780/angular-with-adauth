import { NgModule, inject } from '@angular/core';

@NgModule({})
export class CoreModule {
  constructor() {
    const parent = inject(CoreModule, { optional: true, skipSelf: true });
    if (parent) {
      throw new Error('CoreModule should only be imported in AppModule');
    }
  }
}
