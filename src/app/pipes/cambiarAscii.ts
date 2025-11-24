import {Pipe, PipeTransform} from "@angular/core";
import { popResultSelector } from "rxjs/internal/util/args";
@Pipe({
    name: 'cambiarAscii'
})
export class cambiarAsciiPipe implements PipeTransform {
    transform(value: string) {
        let resultado = ''
        for(let i = 0; i < value.length; i++){
            resultado = resultado + value.charCodeAt(i) + ', ';
        }
        return resultado
    }
}