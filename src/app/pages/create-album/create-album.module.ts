import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateAlbumPage } from './create-album.page';
import { LocationPage } from './location/location';
import { UploadImagePage } from './upload-image/upload-image';

const routes: Routes = [
  {
    path: '',
    component: CreateAlbumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [CreateAlbumPage, LocationPage , UploadImagePage],
  entryComponents: [
    LocationPage,
    UploadImagePage,
  ]
})
export class CreateAlbumPageModule {}
