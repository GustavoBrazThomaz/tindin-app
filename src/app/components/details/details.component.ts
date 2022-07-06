import { Game } from './../../service/gameInterface';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private  router: Router, 
    private route: ActivatedRoute,
    private API: ApiService
  ) { }
  
  id: string|null = ""
  game!: Game
  rating: string = ''
  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('id') === null){
      this.router.navigate([''])
    }else{
      this.id = this.route.snapshot.paramMap.get('id')
    }

   this.getGameById()
  }

  getGameById(){
    this.API.getGameId(this.id).subscribe(response =>{
      this.game = response.body.game
      console.log(response.body.game.mediumPrice)
    },error => console.error(error))
  }
}
