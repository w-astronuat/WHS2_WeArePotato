var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
var ButtonIconComponent = /** @class */ (function () {
    function ButtonIconComponent() {
        this.Click = new EventEmitter();
        this.ButtonClass = "button-icon-default";
    }
    ButtonIconComponent.prototype.OnClick = function () {
        if (this.IsDisabled)
            return;
        this.Click.emit();
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ButtonIconComponent.prototype, "Click", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonIconComponent.prototype, "ButtonClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonIconComponent.prototype, "IsDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonIconComponent.prototype, "MaxHeight", void 0);
    ButtonIconComponent = __decorate([
        Component({
            selector: 'pm-button-icon',
            //templateUrl: './app/controls/components/buttons/button-icon/button-icon.html',
            templateUrl: './button-icon.html',
            styles: ["\n    :host {\n      display: flex;\n    }\n  "],
        })
    ], ButtonIconComponent);
    return ButtonIconComponent;
}());
export { ButtonIconComponent };
