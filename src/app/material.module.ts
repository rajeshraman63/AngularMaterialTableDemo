import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule ,MatInputModule} from "@angular/material";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule
  ]
})

export class MaterialModule {}