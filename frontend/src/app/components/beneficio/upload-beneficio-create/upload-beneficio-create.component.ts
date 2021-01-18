// import { Upload } from '../upload-beneficio.model';
// import { UploadService } from '../upload-beneficio.service';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import {FormControl, Validators} from '@angular/forms';

// @Component({
//   selector: 'app-upload-beneficio-create',
//   templateUrl: './upload-beneficio-create.component.html',
//   styleUrls: ['./upload-beneficio-create.component.css']
// })
// export class UploadBeneficioCreateComponent implements OnInit {
 
//   upload: Upload = {
//     nome: "",
//     dir: ""
//   }

//   constructor(private uploadService: UploadService,
//       private router: Router) { }

//   ngOnInit(): void {
    
//   }

//   createUpload(): void {
//     this.uploadService.create(this.upload).subscribe(() => {
//       this.uploadService.showMessage('Upload realizado!')
//       this.router.navigate(['/upload'])
//     })

//   }
//   cancel(): void {
//     this.router.navigate(['/upload'])
//   }
// }
