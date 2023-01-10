import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFlag',
})
export class CountryFlagPipe implements PipeTransform {
  transform(countryId: number | null): string | null {
    switch (countryId) {
      case 1: {
        return 'https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg';
      }
      case 6: {
        return 'https://www.worldatlas.com/r/w1200/img/flag/ao-flag.jpg';
      }
      case 90: {
        return 'https://www.gettysburgflag.com/media/catalog/product/cache/2/small_image/460x368/9df78eab33525d08d6e5fb8d27136e95/g/u/guinea-bissau.jpg';
      }
      case 100: {
        return 'https://cdn.britannica.com/48/1648-004-A33B72D8/Flag-Indonesia.jpg';
      }
      case 171: {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png';
      }
      case 195: {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png';
      }
      default:
        return null;
    }
  }
}
