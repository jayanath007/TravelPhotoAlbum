import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { LocationPage } from './location/location';
import { PopoverPage } from '../about-popover/about-popover';
import { UploadImagePage } from './upload-image/upload-image';

@Component({
  selector: 'create-album',
  templateUrl: './create-album.page.html',
  styleUrls: ['./create-album.page.scss'],
})
export class CreateAlbumPage implements OnInit {

  constructor(public modalCtrl: ModalController, public popoverCtrl: PopoverController) { }



  ngOnInit() {
  }


  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }




  async addUploadImage() {
    const modal = await this.modalCtrl.create({
      component: UploadImagePage,
    });
    await modal.present();

  }

}
