import { Component, OnInit } from '@angular/core';
import { Renderer } from '@unite/core';

@Component({
    templateUrl : "./renderer.html",
    styleUrls: ['./renderer.css']
})
export class SunbirdHeaderRenderer implements OnInit, Renderer {
    data;
    mapper;
    widgetName;
    metadata;

    constructor() { }

    // Data Manipulation
    ngOnInit() { }
}
