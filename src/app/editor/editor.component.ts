import { Component, OnInit } from '@angular/core';
import { File } from  '../file';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  file: File;
  readOnly = true;
  
  constructor() { 

  }

  ngOnInit() {
  }

}
