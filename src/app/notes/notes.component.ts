import { Component } from '@angular/core';
import { NotesService } from '../Services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  ThereAreNotProducts:boolean = false
  ThereAreProducts:boolean = false
  AddSystem:boolean = false
  EditMode:boolean = false;
  DoneEditBTN:boolean = false
  EditBTN:boolean = true
  
  TitleOfNote:string = ''
  Note:string = ''

  constructor(public EveryNote:NotesService){}

  AddMode(){
    this.ThereAreNotProducts = false
    this.ThereAreProducts = false
    this.EditMode = false
    this.AddSystem = true
  }

  EditFunc(){
    this.ThereAreNotProducts = false
    this.AddSystem = false
    this.ThereAreProducts = false
    this.EditMode = true;
    this.DoneEditBTN = true
    this.EditBTN = false
  }

  DoneEdit(){
    this.ThereAreNotProducts = false
    this.AddSystem = false
    this.ThereAreProducts = true
    this.EditMode = false;
    this.DoneEditBTN = false
    this.EditBTN = true
  }

  DeleteItem(item:number){
    this.EveryNote.NoteArr.splice(item,1)
  }


  openedNote:boolean = false
  closedNote:boolean = true
  isItOpened:boolean = false

  ReadNote(index:number){
    this.openedNote = true
    this.closedNote = false
    this.isItOpened = true
    this.EveryNote.NoteArr[index].closed = true
    this.EveryNote.NoteArr[index].ShowBtn = false
    this.EveryNote.NoteArr[index].closeBtn = true
  }

  CloseNote(index:number){
    this.closedNote = true
    this.openedNote = false
    this.isItOpened = false
    this.EveryNote.NoteArr[index].closed = false
    this.EveryNote.NoteArr[index].closeBtn = false
    this.EveryNote.NoteArr[index].ShowBtn = true
  }

  SubmitAdd(){
    this.EveryNote.NoteArr.push({Title:this.TitleOfNote,Note:this.Note,closed:false,closeBtn:false,ShowBtn:true})
      this.TitleOfNote = ''
      this.Note = ''
      this.AddSystem = false
      this.EditMode= false
      this.ThereAreNotProducts = false
      this.ThereAreProducts = true
  }

}
