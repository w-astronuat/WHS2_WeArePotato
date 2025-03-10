var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Orientation } from '../../../../objects/enums/orientation';
var GripperComponent = /** @class */ (function () {
    function GripperComponent() {
        this.ItemOrientation = Orientation.Vertical; // orientation of items around thumb.
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GripperComponent.prototype, "ItemOrientation", void 0);
    GripperComponent = __decorate([
        Component({
            selector: 'pm-gripper',
            //templateUrl: './app/controls/components/base/gripper/gripper.html',
            templateUrl: './gripper.html',
            styles: ["\n    :host { \n      height: 100%;\n    }\n    "],
        })
    ], GripperComponent);
    return GripperComponent;
}());
export { GripperComponent };
