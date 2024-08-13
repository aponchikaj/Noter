import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  NoteArr = [
    {
      Title:'First Note',
      Note:'This is First note TEST',
      closed:false,
      closeBtn:false,
      ShowBtn:true,
    }
  ]

  constructor() { }
}
