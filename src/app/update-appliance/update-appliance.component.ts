import { ApplianceService } from './../appliance.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appliance } from '../appliance';

@Component({
  selector: 'app-update-appliance',
  templateUrl: './update-appliance.component.html',
  styleUrls: ['./update-appliance.component.css']
})
export class UpdateApplianceComponent implements OnInit {

  appliance: Appliance = new Appliance();
  applianceId: string = '';

  constructor(private ApplianceService: ApplianceService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.applianceId = this.activatedRoute.snapshot.params['applianceId'];

    this.ApplianceService.getApplianceById(this.applianceId).subscribe(data => {
      this.appliance = data;
      console.log(data);
    }, error => console.error(error));
  }


  onSubmit() {
    this.ApplianceService.updateApplianceById(this.appliance.applianceId, this.appliance).subscribe(data => {
      console.warn(data);
      this.router.navigate([`/all`]);
    },
      error => console.warn(error));
  }


}
