import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class EventsElementModel {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getInfoRectEle(ele: Element): DOMRect | undefined {
    if (isPlatformBrowser(this.platformId)) {
      return ele!.getBoundingClientRect();
    }
    return undefined;
  }

  calcHowMuchPhotosToTake(id: string): number {
    if (isPlatformBrowser(this.platformId)) {
      let ele = window.document.getElementById(id);
      let eleInfoRect = this.getInfoRectEle(ele!);
      return Math.floor((eleInfoRect!.width - eleInfoRect!.width*.2)/270.72);
    }
    return 0;
  }

  setEventToDesapear(id: string, classe: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      let topWindow;
      let ele = window.document.getElementById(id);
      let eleInfoRect = this.getInfoRectEle(ele!);

      //Parece que o pageYoffset seta a posição do topo, como a altura em que a pagina carregou, achar algo melhor
      window.document.addEventListener('scroll', (event: Event) => {
        topWindow = window.pageYOffset;
        if (topWindow >= eleInfoRect!.y) ele?.classList.add(classe);
        else ele?.classList.remove(classe);
      });
    }
  }
}
