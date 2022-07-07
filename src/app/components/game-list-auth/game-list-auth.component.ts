import { AddGameComponent } from './../add-game/add-game.component';
import { DeleteGameComponent } from '../delete-game/delete-game.component';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { listGamesInterface } from './../../service/listGames';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-game-list-auth',
  templateUrl: './game-list-auth.component.html',
  styleUrls: ['./game-list-auth.component.scss']
})

export class GameListAuthComponent implements OnInit {

  listGame: listGamesInterface[] = []
  carouselImages: string[] = []
  token: any

  constructor(private API: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.token = window.localStorage.getItem('token')
    this.getGamesList()
  }
  
  getGamesList(){
    this.API.getGamesList().subscribe(
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

  deleteGame(id: any){
    const dialogRef = this.dialog.open(DeleteGameComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result === "true"){
        this.API.deleteGame(id, this.token).subscribe(data => {
          window.location.reload()
        }, error => console.error(error))
      }
    })
  }

  addGame(){
    const dialogRef = this.dialog.open(AddGameComponent)
    dialogRef.afterClosed()
  }

}
