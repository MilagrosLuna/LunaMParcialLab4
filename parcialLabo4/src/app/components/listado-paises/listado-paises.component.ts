import { Component } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css'],
})
export class ListadoPaisesComponent {
  countries: any[] = [];
  filteredCountries: any[] = [];
  selectedCountry: any = null;
  searchText: string = '';

  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.paisesService.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      this.filteredCountries = this.countries;
    });
  }

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.paisesService.setSelectedCountry(country);
  }

  filterCountries() {
    if (!this.searchText) {
      this.filteredCountries = this.countries;
    } else {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
