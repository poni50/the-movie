import { Component, Input, OnInit } from '@angular/core';
import Movie from 'src/app/shared/interfaces/Movie';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss'],
})
export class RoomInfoComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}
