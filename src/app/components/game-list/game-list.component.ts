import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { listGamesInterface, Photos } from './../../service/listGames';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  listGame: listGamesInterface[] = []
  carouselImages: string[] = []

  constructor(private APi: ApiService, public AUTH: AuthService) { }

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
