import { Component, OnInit,  ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @ViewChild('imagenesLight', { static: true }) imagenesLight!: ElementRef<HTMLImageElement>;
  @ViewChild('contenedorLight', { static: true }) contenedorLight!: ElementRef<HTMLDivElement>;
  @ViewChild('menu1', { static: true }) menu1!: ElementRef<HTMLDivElement>;
  @ViewChild('closeIcon', { static: true }) closeIcon!: ElementRef<HTMLImageElement>;

  imagenes: string[] = [
    "./assets/images/imagen_1.jpg",
    "./assets/images/imagen_2.jpg",
    "./assets/images/imagen_3.jpg",
    "./assets/images/imagen_4.jpg",
    "./assets/images/imagen_5.jpg",
    "./assets/images/imagen_6.jpg",
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onImageClick(src: string): void {
    this.aparecerImagen(src);
  }

  onContainerClick(event: Event): void {
    if (event.target !== this.imagenesLight.nativeElement) {
      this.toggleLightbox();
    }
  }



  private aparecerImagen(src: string): void {
    this.imagenesLight.nativeElement.src = src;
    this.toggleLightbox();
  }

  private toggleLightbox(): void {
    this.contenedorLight.nativeElement.classList.toggle('show');
    this.imagenesLight.nativeElement.classList.toggle('showImage');
    this.menu1.nativeElement.style.opacity = this.menu1.nativeElement.style.opacity === '1' ? '0' : '1';
  }

  

}
