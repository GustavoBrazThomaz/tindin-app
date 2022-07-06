import { listGamesInterface, Photos } from './../../service/listGames';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
