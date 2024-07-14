import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, output, viewChild } from '@angular/core';
import { Observable, debounceTime, fromEvent, interval } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Input({ required: true }) name!: string;
  // @Output() customEvent = new EventEmitter();
  // customEvent=output<string>();
  // @ViewChild('card') card!: ElementRef;
  // Observ$!:Observable<any>;
  

  formA!:FormGroup;

  constructor(private fb:FormBuilder)
  {}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  this.formA=this.fb.group({
    input1:['']
  });


  this.formA.valueChanges.pipe(debounceTime(3000)).subscribe(data=>
    {
      console.log("value changes subscribe "+ data.input1);
    }
  )
}

 submit()
 {
  console.log(this.formA.value.input1);
 }

  ngAfterContentInit(): void {
    
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }

  customEventChild() {
    // this.customEvent.emit("chauhan");

    // const parent$=interval(1000);
    // parent$.subscribe((data1)=>{
    // const Observ$ = fromEvent(this.card?.nativeElement, 'click');
    // Observ$.subscribe((data) => {
    //   if(data1<5)
    //   console.log(data,data1);
    // })

    // })
    

  }
}
