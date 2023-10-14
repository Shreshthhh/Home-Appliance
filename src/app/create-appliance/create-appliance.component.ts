import { ApplianceService } from './../appliance.service';
import { Appliance } from './../appliance';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appliance',
  templateUrl: './create-appliance.component.html',
  styleUrls: ['./create-appliance.component.css']
})
export class CreateApplianceComponent implements OnInit {

  constructor(private applianceService:ApplianceService, private router:Router) { }

  appliance:Appliance = new Appliance();

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.appliance);
    this.saveAppliance();
  }
  saveAppliance() {
    this.applianceService.createAppliance(this.appliance).subscribe(data=> {
      console.log(data);
      this.routeToApplianceList();
    },
    error => console.log(error));
  }

  routeToApplianceList() {
    this.router.navigate(['/all']);
  }

}
