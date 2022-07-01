import { Component, Input, OnInit } from '@angular/core';
import { actor } from 'src/app/core/IActor';

@Component({
  selector: 'app-actorview',
  templateUrl: './actorview.component.html',
  styleUrls: ['./actorview.component.css']
})
export class ActorviewComponent implements OnInit {
  @Input() actor: actor = {
    foto: '',
    nombre: '',
    fechaNacimiento: '',
    formatDate: ''
  };
  constructor() { }

  ngOnInit(): void {
    const fecha = new Date(this.actor.fechaNacimiento);
    this.actor.formatDate = fecha.toLocaleDateString("es-Es");
  }

}
