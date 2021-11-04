import { Component, Input } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  private _url ='';

  @Input() description='';

  @Input() set url(url: string) {
    if(!url.startsWith('data')) {
      this._url = GlobalConstants.API_URL + '/imgs/' + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

}
