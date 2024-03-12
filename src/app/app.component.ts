import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import Chart from 'chart.js/auto';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatInputModule,FormsModule,MatDividerModule,MatFormFieldModule,MatIconModule,MatSelectModule,MatTableModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-1';
  a: number = 0;
  b: number = 0;

  Wells: any;
  WellsName: any;
  WellsVal: any[] = [];

  Res: any;
  ResName: any;
  ResVal: any;

  TotalName: any ;
  TotalVal: any;

  chart1: any;
  chart2: any;
  chart3: any;

  chartDisabled: boolean = false;

  editflag1: boolean = false;
  editflag2: boolean = false;

  Wflag: boolean = false;
  Rflag: boolean = false;

  Wb1: string = 'Edit';
  Rb1: string = 'Edit';

  v: any = 1;

  t1: any;

  s1=0
  s2=0

  Total:any

  editButtonClicked1() {
    // this.Wflag = !this.Wflag;

    // if (this.Wflag) {
    //   this.Wb1 = 'Save';
    // } else {
    //   this.Wb1 = 'Edit';
    // }

    this.editflag1 = !this.editflag1;
    // this.editflag2 = !this.editflag2;

    // this.chartDisabled = !this.chartDisabled;
  }


  editButtonClicked2() {

    this.editflag2 = !this.editflag2;
  }

  element: any = 'a'


  list=[1,2,3]

  checkInputValue(inputField: HTMLInputElement) {
    if (parseInt(inputField.value) < 0) {
      inputField.value = '1';
      // You can also update the model value here if needed
      this.element= 1;
    }
  }
  i=0

  // checkInputValue1(i: HTMLInputElement) {
  //   if (parseInt(i.value) < 0) {
  //     i.value = '1';
  //     // You can also update the model value here if needed
  //     // this.item= 1;
  //   }
  // }

  // Modify the checkInputValue1 method to accept the index

  names=['a','b','c']

  checkInputValue1(value: string, index: number) {
    const parsedValue = parseInt(value);
    if (parsedValue < 0) {
      // Assuming you want to reset to 1 if the input is negative
      this.list[index] = 1;
    } else {
      this.list[index] = parsedValue;
    }
  }
}
