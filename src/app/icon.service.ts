import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';


@Injectable()
export class IconService {

  constructor(
    private mdIconRegistry: MdIconRegistry,
    private sanitizer:DomSanitizer
  ) {
    mdIconRegistry.addSvgIcon(
      'd20', this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/noun_20125_cc.svg'));
    mdIconRegistry.addSvgIcon(
      'd20-proper', this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/noun_10617_cc.svg'));
    mdIconRegistry.addSvgIcon(
      'd12', this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/noun_10652_cc.svg'));
    mdIconRegistry.addSvgIcon(
      'd8', this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/noun_10654_cc.svg'));
    mdIconRegistry.addSvgIcon(
      'd6', this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/noun_10655_cc.svg'));
    mdIconRegistry.addSvgIcon(
      'd4', this.sanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/noun_614394_cc.svg.svg'));
  }

}
