import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from './Services/home-page.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UIProject';
  userName:string = '';
  personalPhoto:any ;
  isShowFooter:boolean=true;

  openDialog(): void {

    this.dialog.open(DialogComponent,{
      width:'350px'
    })
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = '300px'; // Set the desired width of the dialog
    // dialogConfig.panelClass = 'center-dialog';

    // const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   // Handle any actions after the dialog is closed
    // });
  }
  constructor(public dialog: MatDialog,private router:Router,private services:HomePageService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.services.geUsername().subscribe({
      next:(value)=> {
        this.userName=value.username;
        this.personalPhoto=this.sanitizer.bypassSecurityTrustUrl(value.personalPhoto);
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
    });  }
registerClick(){
  this.router.navigate(['/user/register'])
}

showChat:boolean=false;
clickHere(){
  this.showChat= !this.showChat;
}
closeChat(){
  this.showChat=false;
}
toAddUnit(){
  if(localStorage.getItem('token')){
    this.router.navigate(['/unit/add']);
  }
  else this.router.navigate(['/user/register'])
}


showFooter(){
  this.isShowFooter=true;
}
hideFooter(){
  this.isShowFooter=false;
}

toChat(){
  this.isShowFooter=false;
  this.router.navigate(['chat/chat/'+'#']);
  this.isShowFooter=false
}
}



