import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Community_User_Category_Class } from '../../shared/community_user_cat';
import { CommunityDataService } from '../../services/community-data.service';


@Component({
  selector: 'app-add-community',
  templateUrl: './add-community.component.html',
  styleUrls: ['./add-community.component.css']
})
export class AddCommunityComponent implements OnInit {

  communityForm: FormGroup;
  constructor(private _dataCommunity: CommunityDataService,
    private router: Router) { }

  ngOnInit() {


    this.communityForm = new FormGroup({
      'comm_name': new FormControl(null, [Validators.required, this.myValidation.bind(this)]),
      'comm_des': new FormControl(null, Validators.required),
      'comm_pic': new FormControl(null, Validators.required)
    });


  }


  // tslint:disable-next-line:member-ordering
  arr: string[] = ['abc', 'xyz'];
  myValidation(control: AbstractControl): { [s: string]: boolean } {
    if (this.arr.indexOf(control.value) !== -1) {
      return { 'slangWords': true };
    }
    return null;
  }

  // tslint:disable-next-line:member-ordering
  selectedFile: File = null;
  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
    console.log(this.selectedFile);
  }
  // tslint:disable-next-line:member-ordering
  catId = 1;
  onSubmit() {

    console.log(this.communityForm);
    const fd = new FormData;
    fd.append('comm_id', null);
    fd.append('comm_name', this.communityForm.value.comm_name);
    fd.append('comm_des', this.communityForm.value.comm_des);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('comm_date', null);
    fd.append('comm_rating', null);
    fd.append('created_by', 'zeel91297@gmail.com');
    fd.append('comm_fk_cat_id', <any>this.catId);

    this._dataCommunity.addCommunity(fd).subscribe(
      (x: any) => {
        alert('Community Added Successfully');
        this.router.navigate(['/community']);
      },
      function (err) {
        alert('error: ' + err);
      },
      function () {
        console.log('finally');
      }
    );
  }
}
