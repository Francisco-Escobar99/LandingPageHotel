import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @ViewChild('imagenesLight',  { static: true }) imagenesLight!:  ElementRef<HTMLImageElement>;
  @ViewChild('contenedorLight',{ static: true }) contenedorLight!: ElementRef<HTMLDivElement>;
  @ViewChild('closeIcon',      { static: true }) closeIcon!:       ElementRef<HTMLButtonElement>;

  imagenes: string[] = [
    './assets/images/imagen_1.jpg',
    './assets/images/imagen_2.jpg',
    './assets/images/imagen_3.jpg',
    './assets/images/imagen_4.jpg',
    './assets/images/imagen_5.jpg',
    './assets/images/imagen_6.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}

  onImageClick(src: string): void {
    this.imagenesLight.nativeElement.src = src;
    this.openLightbox();
  }

  onContainerClick(event: Event): void {
    if (event.target === this.contenedorLight.nativeElement) {
      this.closeLightbox();
    }
  }

  closeLightbox(): void {
    this.contenedorLight.nativeElement.classList.remove('show');
    this.imagenesLight.nativeElement.classList.remove('showImage');
    document.body.style.overflow = '';
  }

  private openLightbox(): void {
    this.contenedorLight.nativeElement.classList.add('show');
    this.imagenesLight.nativeElement.classList.add('showImage');
    document.body.style.overflow = 'hidden';
  }
}
