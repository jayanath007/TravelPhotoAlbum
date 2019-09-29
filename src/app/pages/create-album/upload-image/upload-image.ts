import { AfterViewInit, Component } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';
import { LocationPage } from '../location/location';



@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
  styleUrls: ['./upload-image.scss'],
})
export class UploadImagePage implements AfterViewInit {
  ios: boolean;

  tracks: {name: string, icon: string, isChecked: boolean}[] = [];

  constructor(
    private config: Config,
    public modalCtrl: ModalController,
  ) { }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;
  }

  // TODO use the ionViewDidEnter event
  ngAfterViewInit() {

  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }

  async addLocation() {
    const modal = await this.modalCtrl.create({
      component: LocationPage,
    });
    await modal.present();

  }

}
