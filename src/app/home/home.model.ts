export class User { 
artist: string;
title: string;
musicGenre: string[];
age: number;
isActive: boolean;
started: Date;
id: string;

constructor(
 artist:string = "",
 title:string = "", 
 musicGenre:string[]=[], 
 age:number = 0, 
 isActive:boolean = false, 
 started:Date = new Date,
 id: string = ""
 ) 
 
 { 
    this.artist = artist;
    this.title = title;
    this.musicGenre = musicGenre;
    this.age = age;
    this.isActive = isActive;
    this.started = started; 
    this.id = id;
}
};

export interface iUser{
artist: string;
title: string;
musicGenre: string[];
age: number;
isActive: boolean;
started: Date;
id: string;
}