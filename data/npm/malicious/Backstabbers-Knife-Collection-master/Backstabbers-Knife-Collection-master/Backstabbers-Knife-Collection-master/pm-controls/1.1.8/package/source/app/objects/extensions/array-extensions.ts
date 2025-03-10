
// interface Array<T> {
//     findNextItem(item: any) : any;
// }

// Array.prototype.findNextItem = function(item: any): any {
//     this
//     if (!this || this.length == 0)
//         return undefined;

//     if (!item)
//         return this[0];

//     var index = this.indexOf(item);
//     if (index == -1 || index + 1 == this.length)
//         return undefined;
//     return this[index+1];
// }

export class ArrayExtensions {

    static findNextItem(items: Array<any>, item: any) : any {
        
        if (!items || items.length == 0)
            return undefined;

        if (!item)
            return items[0];

        var index = items.indexOf(item);
        if (index == -1 || index + 1 == items.length)
            return undefined;
        return items[index+1];
    }

    static findPreviousItem(items: Array<any>, item: any) : any {
        
        if (!items || items.length == 0)
            return undefined;

        if (!item)
            return items[0];

        var index = items.indexOf(item);
        if (index == -1 || index == 0)
            return undefined;
        return items[index-1];
    }
}