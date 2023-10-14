import { ApplianceService } from './../appliance.service';
import { Component, OnInit } from '@angular/core';
import { Appliance } from '../appliance';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appliance-list',
  templateUrl: './appliance-list.component.html',
  styleUrls: ['./appliance-list.component.css']
})

export class ApplianceListComponent implements OnInit {


  appliances: Appliance[] | undefined;

  constructor(private applianceService: ApplianceService, private router: Router) { }


  ngOnInit(): void {
    this.getAllAppliances();
  }

  private getAllAppliances() {
    this.applianceService.getAllAppliances().subscribe(data => {
      this.appliances = data;
      console.warn("data fetched")
    })
  }

  updateAppliance(applianceId: string) {
    this.router.navigate(['update-appliance', applianceId]);
  }

  deleteAppliance(applianceId: string) {
    console.warn("started");
    this.applianceService.deleteAppliance(applianceId).subscribe(data => {
      console.log(data);
    });
    this.applianceService.getAllAppliances().subscribe(data => {
      this.appliances = data;
      console.log(data);
    });
    this.router.navigate(['']);
  }

}
console.warn("Inside component");

