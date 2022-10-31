import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGaleryComponent } from './top-galery.component';

describe('TopGaleryComponent', () => {
  let component: TopGaleryComponent;
  let fixture: ComponentFixture<TopGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGaleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
