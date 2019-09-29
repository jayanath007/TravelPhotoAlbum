import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlbumPage } from './create-album.page';

describe('CreateAlbumPage', () => {
  let component: CreateAlbumPage;
  let fixture: ComponentFixture<CreateAlbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlbumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
