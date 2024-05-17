import { Component, OnInit } from '@angular/core';
import { Anime } from '../Anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  animes: Array<Anime> = [];
  selected: Boolean = false;
  selectedAnime!: Anime;

  constructor(private animerService :AnimeService) { }

  getAnimes():void{
    this.animerService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  }


  getTotalEpisodios(): number{
    let tamanio = this.animes.length
    let total = 0
    for(let i = 0 ; i < tamanio; i++){
      let  anime = this.animes[i]
      total += anime.episode
     

    }
    return total
  }

  getPromedio(): number{
    let tamanio = this.animes.length
    let suma = 0
    let cantidad = 0

    for(let i = 0 ; i < tamanio; i++){
      let  anime = this.animes[i]
      let rating = parseFloat(anime.Rating)
      suma += rating
      cantidad+=1
     

    }
    let promedio = suma / cantidad;
    
    return promedio
  }



  ngOnInit() {
    this.getAnimes();
  }

}
