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
import { Property } from '../../../objects/request/properties/property';
import { Orientation } from '../../../objects/enums/orientation';
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
    }
    Object.defineProperty(FormGroupComponent.prototype, "OrientationClass", {
        get: function () {
            if (this.Property && this.Property.Orientation == Orientation.Horizontal)
                return "form-horizontal";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "GroupContainerClass", {
        get: function () {
            if (this.Property && this.Property.Orientation == Orientation.Horizontal)
                return "layout-flex layout-flex-fill";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "GroupClass", {
        get: function () {
            if (this.Property && this.Property.Orientation == Orientation.Horizontal)
                return "layout-flex-fill";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Property)
    ], FormGroupComponent.prototype, "Property", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], FormGroupComponent.prototype, "ShowTooltip", void 0);
    FormGroupComponent = __decorate([
        Component({
            selector: 'pm-form-group',
            //templateUrl: './app/controls/components/form/form-group.html',
            templateUrl: './form-group.html'
        })
    ], FormGroupComponent);
    return FormGroupComponent;
}());
export { FormGroupComponent };
