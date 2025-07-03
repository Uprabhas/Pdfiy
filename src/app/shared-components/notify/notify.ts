import { Component, Inject } from '@angular/core';
import { AppMaterialModule } from '../../helper/app-material/app-material-module';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notify',
  imports: [AppMaterialModule],
  templateUrl: './notify.html',
  styleUrl: './notify.scss'
})
export class Notify {
constructor(
    public sbRef: MatSnackBarRef<Notify>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
  ngOnInit() {}
}
