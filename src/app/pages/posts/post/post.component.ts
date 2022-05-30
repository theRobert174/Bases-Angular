import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje : any;
  @Output() clickPost = new EventEmitter<number>(); //Generics

  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    //console.log(this.mensaje.id);
    this.clickPost.emit(this.mensaje.id);
  }

}
