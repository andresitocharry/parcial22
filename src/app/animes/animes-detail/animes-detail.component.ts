import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../Anime';

@Component({
  selector: 'app-animes-detail',
  templateUrl: './animes-detail.component.html',
  styleUrls: ['./animes-detail.component.css']
})
export class AnimesDetailComponent implements OnInit {
  @Input() animeDetail!: Anime;

  constructor() { }

  ngOnInit() {
  }

}
