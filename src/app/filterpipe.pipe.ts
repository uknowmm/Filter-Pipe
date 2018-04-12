import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, filterstring: string): any {
    if(value.lenght===0){
      return value;
    
  }
const result=[];
for(const item of value){
  if(item.name===filterstring){
   result.push(item);
  }
}
return result;
  }

}
