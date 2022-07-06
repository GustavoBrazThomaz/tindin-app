import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListAuthComponent } from './game-list-auth.component';

describe('GameListAuthComponent', () => {
  let component: GameListAuthComponent;
  let fixture: ComponentFixture<GameListAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
