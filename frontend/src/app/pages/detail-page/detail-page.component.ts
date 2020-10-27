import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  faPhone = faPhoneSquareAlt;
  id = '';

  carInfo = {
    price: 6200000,
    phone: '0712973088',
    name: 'Audi A4 Stronic Facelift 2013',
    posted: new Date('2020-10-20 02:12 PM'),
    location: 'Colombo',
    description: `<div class="description"><p>company maintenance</p><p></p><p>PUSH START , SMARTKEY , KEYLESS ENTRY</p><p></p><p>AUTO MIRROR CLOSER FOR LOCK &amp; UNLOCK</p><p></p><p>AUTO STOP , IDLING STOP</p></div>`,
  };

  description: SafeHtml;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.description = this.sanitizer.bypassSecurityTrustHtml(
      this.carInfo.description
    );
    this.activatedRoute.params.pipe(map((p) => p.id)).subscribe((result) => {
      this.id = result;
    });
  }
}
