import { Component,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

@Input() titre: string;
@Input() content: string;
@Input() loveIts: number;
@Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  rendre_vert(){
    this.loveIts++;
  }

    rendre_rouge(){
      this.loveIts--;
    }


    getColor()
    {
           if(this.loveIts > 0)
           {
                return 'green';
           }
           else if(this.loveIts < 0)
           {
                return 'red';
           }
    }
}
