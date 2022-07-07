import { ApiService } from './../../service/api.service';
import { Plataforms } from './../../service/plataformInterface';
import { Genre } from './../../service/genreInterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  public formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private API: ApiService) { }
    dropdownGenresList: any[] = []
    dropdownGenresSettings = {};

    dropdownPlataformList: any[] = []
    dropdownPlataformSettings = {};

    genres: Genre[] = []
    plataforms: Plataforms[] = []

    genresPost: String[] = []
    plataformPost: String[]= []

    jsonPost: any
    token: any
    ngOnInit() {
      this.token = window.localStorage.getItem('token')
      
      this.formulario = this.formBuilder.group({
        title: ['',[Validators.required]],
        photos: ['', [Validators.required]],
        genres: ['',[Validators.required]],
        plataform: ['',[Validators.required]],
        price: ['',[Validators.required]],
        description: ['',[Validators.required]],
      })

      this.dropdownGenresList = this.GenresList
      this.dropdownGenresSettings = {
        singleSelection: false,
        textField: 'genre',
        allowSearchFilter: true,
        itemsShowLimit: 3,
      };

      this.dropdownPlataformList = this.PlataformList
      this.dropdownPlataformSettings = {
        singleSelection: false,
        textField: 'plataform',
        allowSearchFilter: true,
        itemsShowLimit: 3,
      };
    }
    
    GenresList: any = [
      {id: 0, genre: 'Fight'},
      {id: 1, genre: 'Sports'},
      {id: 2, genre: 'Survival'},
      {id: 3, genre: 'Horror'},
      {id: 4, genre: 'RPG'},
      {id: 5, genre: 'Fps'},
      {id: 6, genre: 'Platform'},
      {id: 7, genre: 'Adventure'},
      {id: 8, genre: 'Action'},
      {id: 9, genre: 'Minigame'},
      {id: 10, genre: 'Racing'},
      {id: 11, genre: 'Strategy'},
      {id: 12, genre: 'Musical'},
      {id: 13, genre: 'Dance'},
      {id: 14, genre: 'Simulator'}
    ]

    PlataformList: any = [
      {id: 0, plataform: 'PS'},
      {id: 1, plataform: 'PS2'},
      {id: 2, plataform: 'PS3'},
      {id: 3, plataform: 'PS4'},
      {id: 4, plataform: 'PS5'},
      {id: 5, plataform: 'PSP'},
      {id: 6, plataform: 'Xbox 360'},
      {id: 7, plataform: 'Xbox One'},
      {id: 8, plataform: 'Xbox Series S'},
      {id: 9, plataform: 'Xbox Series X'},
      {id: 10, plataform: 'Super Nintendo'},
      {id: 11, plataform: 'Nintendo 64'},
      {id: 12, plataform: 'Nintendo Switch'},
      {id: 13, plataform: 'Nintendo Wii'},
      {id: 14, plataform: 'Nintendo DS'},
      {id: 15, plataform: 'Nintendo 3DS'},
      {id: 16, plataform: 'Mega Drive'},
      {id: 18, plataform: 'Mobile'},
    ]

    async onSubmit(){
      await this.genresMap()
      await this.plataformMap()
      await this.objectPost()
      await this.API.postGame(this.jsonPost, this.token).subscribe(resp => {
        window.location.reload()
      }, error => console.error(error))
    }

    genresMap(){
      this.genres = this.formulario.value.genres

      this.genres.map(resp => {
        this.genresPost.push(resp.genre)
     })
    }
    
    plataformMap(){
      this.plataforms = this.formulario.value.plataform
      
      this.plataforms.map(resp => {
        this.plataformPost.push(resp.plataform)
      })
    }

    objectPost(){
      let valorFormulario = this.formulario.value
      this.jsonPost = [
        {
          title: valorFormulario.title,
          photos: [{name: "picture", url: valorFormulario.photos}],
          genres: this.genresPost,
          platforms: this.plataformPost,
          mediumPrice: valorFormulario.price,
          description: valorFormulario.description
        }
      ]
    }
}
