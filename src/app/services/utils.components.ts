import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'range' })
export class RangePipe implements PipeTransform {
    transform(value: number): number []{
        const items: number[] = [];
        for (let i = 1; i <= value; i++) {
            items.push(i);
        }
        return items;
    }
}

// @Pipe({image: 'bypass'})
// export class BypassPipe implements PipeTransform {
//     transform(image: string): string {
//         return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
//     }
// }