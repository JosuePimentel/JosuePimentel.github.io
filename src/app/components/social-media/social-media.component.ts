import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
})
export class SocialMediaComponent implements OnInit {
  @Input({required: true}) socialSVG: string = '';
  @Input({required: true}) socialLink: string = '';

  safeSVG: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
      this.safeSVG = this.sanitizer.bypassSecurityTrustHtml(this.socialSVG)
  }
}
