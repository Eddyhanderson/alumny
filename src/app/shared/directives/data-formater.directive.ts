import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDataFormater]'
})
export class DataFormaterDirective implements OnInit {

  @Input('appDataFormater') date: string;
  private timeEstimated: string;
  private dateInternal:Date;
  

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.formateDate();
  }

  private setDateInternal(){
    let dateDivisor = this.date.split(new RegExp('-|T|Z|:'));    

    let year = Number.parseInt(dateDivisor[0]); 
    let month = Number.parseInt(dateDivisor[1]) - 1;
    let day = Number.parseInt(dateDivisor[2]);

    let hour = Number.parseInt(dateDivisor[3]);
    let min = Number.parseInt(dateDivisor[4]);
    let sec= Number.parseInt(dateDivisor[5]);
    
    this.dateInternal = new Date(year, month, day, hour, min, sec);
  }

  private setTimeEstimated(duration:number){
    if (duration < 60) {
      this.timeEstimated = `há ${duration} seg`;
    } else if (duration >= 60 && duration < 3600) {
      duration = Math.floor(duration/ 60); 
      this.timeEstimated = `há ${duration} min`;
    } else if (duration >= 3600 && duration < 86400) {
      duration = Math.floor(duration / 3600);
      this.timeEstimated = duration > 1 ? `há ${duration} horas` : `há ${duration} hora`;
    } else if (duration >= 86400 && duration < 31536000) {
      duration = Math.floor(duration / 86400);
      this.timeEstimated = duration > 1 ? `há ${duration} dias`: `há ${duration} dia`;
    } else if (duration >= 31536000) {
      duration = Math.floor(duration / 31536000);
      this.timeEstimated = duration > 1 ? `há ${duration} anos` : `há ${duration} ano`;
    }
  }

  private calculateDuration():number{
    let now = new Date();

    return Math.floor((now.valueOf() - this.dateInternal.valueOf())/ 1000);
  }

  private writeTimeEstimated(){
    console.dir(this.el.nativeElement);
    this.el.nativeElement.innerHTML = `<span>${this.timeEstimated}</span>`
  }

  private formateDate() {

    this.setDateInternal();
    let duration = this.calculateDuration();      
    this.setTimeEstimated(duration);
    this.writeTimeEstimated();
  }   
}
