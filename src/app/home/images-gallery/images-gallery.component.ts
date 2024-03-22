import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-images-gallery',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './images-gallery.component.html',
  styleUrl: './images-gallery.component.css'
})
export class ImagesGalleryComponent {
  public cars = [
    {image: "/assets/Fusca-principal.webp", alt: "Fusca"},
    {image: "/assets/1967-ford-galaxie.webp", alt: "Ford galaxie 1967"},
    {image: "/assets/charger-1970.jpg", alt: "Charger 1970"},
    {image: "/assets/FORD-MUSTANG-BOSS-429.jpg", alt: "Ford Mustang Boss 429"},
    {image: "/assets/mustang-boss.jpg", alt: "Ford Mustang Boss 429"},
    {image: "/assets/opala-1974.jpg", alt: "Opala 1974"},
  ]

}
