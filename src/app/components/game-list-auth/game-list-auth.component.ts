import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { listGamesInterface } from './../../service/listGames';

@Component({
  selector: 'app-game-list-auth',
  templateUrl: './game-list-auth.component.html',
  styleUrls: ['./game-list-auth.component.scss']
})
export class GameListAuthComponent implements OnInit {

  listGame: listGamesInterface[] = []
  carouselImages: string[] = []

  constructor(private APi: ApiService) { }

  ngOnInit(): void {
    this.getGamesList()
  }
  
  getGamesList(){
    this.APi.getGamesList().subscribe(
      response => {
        if(response.status === 200){
          this.listGame = response.body.games
          this.getCarouselImages()
        }
      }, error => console.error(error)
    )
  }

  getCarouselImages(){
    this.listGame.map(response =>{
      if(response.highlight === true){
        this.carouselImages.push(response.photos[0].url)
      }
    })
  }
}
