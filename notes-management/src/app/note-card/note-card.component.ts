import { Component, Input, ElementRef, ViewChild, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() body: string | undefined;
  @Input() image: string | undefined;
  @Input() link: string | undefined;


  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.image + "---" + this.title + "---" + this.link)
  }

  onXButtonClick(){
    this.deleteEvent.emit();
  }

}
