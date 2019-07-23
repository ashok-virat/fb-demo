import { Component } from '@angular/core';
import Post from 'src/app/post.modal';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fb-mini';
  public logo="FB DEMO";
   public postList:Post[];
   public post:Post;
  samplePostVidoe: Post;
  newuploadedFileURL: any;
 public constructor(private sanitizer:DomSanitizer){
   this.post=new Post;


     this.postList=[];
     
     
 }

 /**post text */
 public postText(){
   this.postList.splice(0,0,this.post)
   
   this.post=new Post();
  
 }
 public likeCount(item){
    item.likeCount+=1;
 }
 public subsciberCount(item){
   item.subscribeCount+=1;
 }
 public addcomment(item){
   item.commentList.push('tank you')
 }
 public deletePost(itemIndex) {
    this.postList.splice(itemIndex,1);
 }
 public postImage(event){
     let refElement=event.target;
     let uploadedFile=refElement.files[0];

     let uploadedFileURL=URL.createObjectURL(uploadedFile)
      
    this.newuploadedFileURL=this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileURL)

     this.post.postType="IMAGE";
     this.post.postValue=this.newuploadedFileURL;

     this.postList.splice(0,0,this.post)
   
     this.post=new Post;
  
 }
 public postVideo(event){
  let refElement=event.target;
  let uploadedFile=refElement.files[0];

  let uploadedFileURL=URL.createObjectURL(uploadedFile)
   
 this.newuploadedFileURL=this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileURL)

  this.post.postType="VIDEO";
  this.post.postValue=this.newuploadedFileURL;

  this.postList.splice(0,0,this.post)

  this.post=new Post;
  
}
}
