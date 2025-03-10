import { 
    Component,
    Compiler,
    CompilerFactory,
    COMPILER_OPTIONS, 
    CUSTOM_ELEMENTS_SCHEMA,
    EventEmitter, 
    ModuleWithProviders, 
    NgModule,
    Output, 
}                                                 from '@angular/core';
import { CommonModule }                           from "@angular/common";
import { FormsModule }                            from '@angular/forms';
import { RouterModule }                           from '@angular/router';
import { JitCompilerFactory }                     from '@angular/platform-browser-dynamic';

import { IconsModule }                            from './components/icons/icons-module';

import { AlertDialog }                            from './services/dialog/alert-dialog';
import { AreaChartComponent }                     from './components/chart/area-chart/area-chart-component';
import { BarComponent }                           from './components/bar/bar-component';
import { BarChartComponent }                      from './components/chart/bar-chart/bar-chart-component';
import { BadgeComponent }                         from './components/badge/badge-component';
import { BreadcrumbComponent }                    from './components/breadcrumb/breadcrumb-component';
import { BusyIndicatorCircularComponent }         from './components/busy-indicator/busy-indicator-circular/busy-indicator-circular-component';
import { BusyIndicatorControlComponent }          from './components/busy-indicator/busy-indicator-control/busy-indicator-control-component';
import { BusyIndicatorLinearComponent }           from './components/busy-indicator/busy-indicator-linear/busy-indicator-linear-component';
import { BusyIndicatorOverlayComponent }          from './components/busy-indicator/busy-indicator-overlay/busy-indicator-overlay-component';
import { BusyIndicatorOverlayCircularComponent }  from './components/busy-indicator/busy-indicator-overlay-circular/busy-indicator-overlay-circular-component';
import { ButtonBlockComponent }                   from './components/buttons/button-block/button-block-component';
import { ButtonComponent }                        from './components/buttons/button/button-component';
import { ButtonDropdownComponent }                from './components/buttons/button-dropdown/button-dropdown-component';
import { ButtonIconComponent }                    from './components/buttons/button-icon/button-icon-component';
import { CardComponent }                          from './components/cards/card/card-component';
import { CheckBoxComboBoxComponent }              from './components/boxes/check-box-combo-box/check-box-combo-box-component';
import { CheckBoxComponent }                      from './components/boxes/check-box/check-box-component';
import { CheckBoxListBoxComponent }               from './components/boxes/check-box-list-box/check-box-list-box-component';
import { ClipboardService }                       from './services/clipboard/clipboard-service';
import { ColumnFilterPopup }                      from './components/grid/filters/column-filter-popup';
import { ColumnChartComponent }                   from './components/chart/column-chart/column-chart-component';
import { ComboBoxComponent }                      from './components/boxes/combo-box/combo-box-component';
import { ComboChartComponent }                    from './components/chart/combo-chart/combo-chart-component';
import { ComboSelectedItemComponent }             from './components/boxes/combo-box/combo-selected-item';
import { CompatibilityService }                   from './services/compatibility/compatibility-service';
import { ConfirmDialog }                          from './services/dialog/confirm-dialog';
import { ContextMenuComponent }                   from './components/context-menu/context-menu-component';
import { ContextMenuHeaderComponent }             from './components/context-menu/context-menu-header-component';
import { ContextMenuDirective }                   from './directives/context-menu/context-menu-directive';
import { ContextMenuDividerComponent }            from './components/context-menu/context-menu-divider-component';
import { ContextMenuItemComponent }               from './components/context-menu/context-menu-item-component';
import { DatePickerComponent }                    from './components/date-picker/date-picker-component';
import { DialogService }                          from './services/dialog/dialog-service';
import { DividerComponent }                       from './components/divider/divider-component';
import { DonutChartComponent }                    from './components/chart/donut-chart/donut-chart-component';
import { DraggableDirective }                     from './directives/draggable/draggable-directive';
import { DropDownComponent }                      from './components/base/drop-down/drop-down-component';
import { ErrorToast }                             from './services/logging/error-toast';
import { ExpanderComponent }                      from './components/expander/expander-component';
import { FieldComponent }                         from './components/field/field-component';
import { FilterBoxComponent }                     from './components/boxes/filter-box/filter-box-component';
import { FormComponent }                          from './components/form/form-component';
import { FormGroupComponent }                     from './components/form/form-group-component';
import { FormPanelComponent }                     from './components/panels/form-panel/form-panel-component';
import { FormTemplateComponent }                  from './components/form/form-template-component';
import { GraphComponent }                         from './components/graph/graph-component';
import { GridCellTemplateComponent }              from './components/grid/grid-cell/grid-cell-template-component';
import { GridComponent }                          from './components/grid/grid-component';
import { GridColumnHeaderComponent }              from './components/grid/grid-columns/grid-column-header-component';
import { GridColumnFooterComponent }              from './components/grid/grid-columns/grid-column-footer-component';
import { GridColumnGroupingComponent }            from './components/grid/grid-columns/column-group/grid-column-group-component';
import { GridHeaderTemplateComponent }            from './components/grid/grid-cell/grid-header-template-component';
import { GridRowComponent }                       from './components/grid/grid-rows/grid-row-component';
import { GridRowsComponent }                      from './components/grid/grid-rows/grid-rows-component';
import { GridRowsCountComponent }                 from './components/grid/grid-rows/grid-rows-count-component';
import { GridPanelComponent }                     from './components/panels/grid-panel/grid-panel-component';
import { GridSettingsDialog }                     from './components/grid/grid-settings/grid-settings-dialog';
import { GridSettingsColumnPanelComponent }       from './components/grid/grid-settings/grid-settings-column-panel-component';
import { GridSettingsColumnGroupsPanelComponent } from './components/grid/grid-settings/grid-settings-column-groups-panel-component';
import { GridSettingsRowPanelComponent }          from './components/grid/grid-settings/grid-settings-row-panel-component';
import { GridSettingsGeneralPanelComponent }      from './components/grid/grid-settings/grid-settings-general-panel-component';
import { GripperComponent }                       from './components/base/gripper/gripper-component';
import { HighlightPipe }                          from './pipes/highlight/highlight-pipe';
import { LabelComponent }                         from './components/labels/label/label-component';
import { LabelErrorComponent }                    from './components/labels/label-error/label-error-component';
import { LineChartComponent }                     from './components/chart/line-chart/line-chart-component';
import { LineBarChartComponent }                  from './components/chart/line-bar-chart/line-bar-chart-component';
import { LinkComponent }                          from './components/link/link-component';
import { ListBoxComponent }                       from './components/boxes/list-box/list-box-component';
import { NumericBoxComponent }                    from './components/boxes/numeric-box/numeric-box-component';
import { MenuButtonComponent }                    from './components/menu/menu-button/menu-button-component';
import { MenuButtonItemComponent }                from './components/menu/menu-button-item/menu-button-item-component';
import { MenuDropDownButtonComponent }            from './components/menu/menu-drop-down-button/menu-drop-down-button-component';
import { MenuDropDownItemComponent }              from './components/menu/menu-drop-down-item/menu-drop-down-item-component';
import { ModalComponent }                         from './components/modal/modal-component';
import { MouseEnterDirective }                    from './directives/mouse-enter/mouse-enter-directive';
import { MouseWheelDirective }                    from './directives/mouse-wheel/mouse-wheel-directive';
import { MultiSelectTextBoxComponent }            from './components/boxes/multi-select-text-box/multi-select-text-box-component';
import { OverlayComponent }                       from './components/panels/overlay/overlay-component';
import { PieChartComponent }                      from './components/chart/pie-chart/pie-chart-component';
import { PopupMenuDirective }                     from './directives/popup-menu/popup-menu-directive';
import { PropertiesComponent }                    from './components/properties/properties-component';
import { RadioButtonComponent }                   from './components/radio/radio-button/radio-button-component';
import { RadioTabsComponent }                     from './components/radio/radio-tabs-component';
import { RadioTabComponent }                      from './components/radio/radio-tab-component';
import { ResizePanelComponent }                   from './components/panels/resize-panel/resize-panel-component';
import { SidebarComponent }                       from './components/sidebar/sidebar-component';
import { SidenavComponent }                       from './components/sidenav/sidenav-component';
import { SliderComponent }                        from './components/slider/slider-component';
import { StackPanelComponent }                    from './components/panels/stack-panel/stack-panel-component';
import { SwitchComponent }                        from './components/switch/switch-component';
import { TabComponent }                           from './components/tab/tab-component';
import { TabsComponent }                          from './components/tabs/tabs-component';
import { TextareaComponent }                      from './components/textarea/textarea-component';
import { TextBoxComponent }                       from './components/boxes/text-box/text-box-component';
import { ToastComponent }                         from './components/toast/toast-component';
import { ToastService }                           from './services/toast/toast-service';
import { ToolbarComponent }                       from './components/toolbar/toolbar-component';
import { TooltipComponent }                       from './components/tooltips/tooltip-component';
import { TooltipDirective }                       from './directives/tooltip/tooltip-directive';
import { TreeComponent }                          from './components/tree/tree-component';
import { TreeItemComponent }                      from './components/tree/tree-item-component';
import { ThumbComponent }                         from './components/base/thumb/thumb-component';
import { VirtualPanelComponent }                  from './components/panels/virtual-panel/virtual-panel-component';
import { VsFor }                                  from './directives/vs-for/vs-for';

export function createCompiler(compilerFactory: CompilerFactory) {
    return compilerFactory.createCompiler();
}

@NgModule({
    imports: [ 
        CommonModule, 
        FormsModule,
        IconsModule,
        RouterModule,
    ],
    declarations: [
        AlertDialog,
        AreaChartComponent,
        BadgeComponent,
        BarComponent,
        BarChartComponent,
        BreadcrumbComponent,
        BusyIndicatorCircularComponent,
        BusyIndicatorControlComponent,
        BusyIndicatorLinearComponent,
        BusyIndicatorOverlayComponent,
        BusyIndicatorOverlayCircularComponent,
        ButtonBlockComponent,
        ButtonComponent,
        ButtonDropdownComponent,
        ButtonIconComponent,
        CardComponent,
        CheckBoxComboBoxComponent,
        CheckBoxComponent,
        CheckBoxListBoxComponent,        
        ColumnChartComponent,
        ColumnFilterPopup,
        ComboBoxComponent,
        ComboChartComponent,
        ComboSelectedItemComponent,
        ConfirmDialog,
        ContextMenuComponent,
        ContextMenuHeaderComponent,
        ContextMenuDirective,
        ContextMenuDividerComponent,
        ContextMenuItemComponent,
        DatePickerComponent,
        DividerComponent,
        DonutChartComponent,        
        DraggableDirective,
        DropDownComponent,
        ExpanderComponent,
        ErrorToast,
        FieldComponent,
        FilterBoxComponent,
        FormComponent,
        FormGroupComponent,
        FormPanelComponent,
        FormTemplateComponent,       
        GridCellTemplateComponent,
        GridComponent,
        GridColumnHeaderComponent,
        GridColumnFooterComponent,
        GridColumnGroupingComponent,        
        GridHeaderTemplateComponent,
        GridPanelComponent,
        GridRowComponent,
        GridRowsComponent,
        GridRowsCountComponent,
        GridSettingsColumnPanelComponent,
        GridSettingsColumnGroupsPanelComponent,
        GridSettingsRowPanelComponent,        
        GridSettingsDialog,
        GridSettingsGeneralPanelComponent,
        GraphComponent,
        GripperComponent,
        HighlightPipe,
        LabelComponent,
        LabelErrorComponent,
        LineBarChartComponent,
        LineChartComponent,
        LinkComponent,
        ListBoxComponent,
        MenuButtonComponent,
        MenuButtonItemComponent,
        MenuDropDownButtonComponent,
        MenuDropDownItemComponent,
        ModalComponent,
        MouseEnterDirective,
        MouseWheelDirective,
        MultiSelectTextBoxComponent,
        NumericBoxComponent,
        OverlayComponent,
        PieChartComponent,
        PopupMenuDirective,
        PropertiesComponent,
        RadioButtonComponent,
        RadioTabsComponent,
        RadioTabComponent,
        ResizePanelComponent,
        SidebarComponent,
        SidenavComponent,        
        SliderComponent,
        StackPanelComponent,
        SwitchComponent,
        TabComponent,
        TabsComponent,
        TextareaComponent,
        TextBoxComponent,        
        ThumbComponent,
        ToastComponent,
        ToolbarComponent,
        TooltipComponent,
        TooltipDirective,
        TreeComponent,
        TreeItemComponent,
        VirtualPanelComponent,
        VsFor,        
    ],
    exports: [ 
        AlertDialog,
        AreaChartComponent,
        BadgeComponent,
        BarComponent,
        BarChartComponent,
        BreadcrumbComponent,
        BusyIndicatorCircularComponent,
        BusyIndicatorControlComponent,
        BusyIndicatorLinearComponent,
        BusyIndicatorOverlayComponent,
        BusyIndicatorOverlayCircularComponent,
        ButtonBlockComponent,
        ButtonComponent,
        ButtonDropdownComponent,
        ButtonIconComponent,
        CardComponent,
        CheckBoxComboBoxComponent,
        CheckBoxComponent,
        CheckBoxListBoxComponent,
        ColumnFilterPopup,
        ColumnChartComponent,
        ComboBoxComponent,
        ComboChartComponent,
        ComboSelectedItemComponent,
        ConfirmDialog,
        ContextMenuComponent,
        ContextMenuHeaderComponent,
        ContextMenuDirective,
        ContextMenuDividerComponent,
        ContextMenuItemComponent,
        DatePickerComponent,
        DividerComponent,
        DonutChartComponent,        
        DraggableDirective,
        DropDownComponent,
        ErrorToast,
        ExpanderComponent,        
        FieldComponent,
        FilterBoxComponent,
        FormComponent,
        FormGroupComponent,
        FormPanelComponent,
        FormTemplateComponent,        
        GridCellTemplateComponent,
        GridColumnHeaderComponent,
        GridColumnFooterComponent,
        GridColumnGroupingComponent,
        GridComponent,
        GridHeaderTemplateComponent,
        GridPanelComponent,
        GridRowComponent,
        GridRowsComponent,
        GridRowsCountComponent,
        GridSettingsColumnPanelComponent,
        GridSettingsColumnGroupsPanelComponent,
        GridSettingsRowPanelComponent,
        GridSettingsGeneralPanelComponent,
        GraphComponent,
        GripperComponent,
        HighlightPipe,
        LabelComponent,
        LabelErrorComponent,
        LineBarChartComponent,
        LineChartComponent,        
        LinkComponent,
        ListBoxComponent,
        MenuButtonComponent,
        MenuButtonItemComponent,
        MenuDropDownButtonComponent,
        MenuDropDownItemComponent,
        ModalComponent,
        MouseEnterDirective,
        MouseWheelDirective,
        MultiSelectTextBoxComponent,
        NumericBoxComponent,
        OverlayComponent,
        PieChartComponent,
        PopupMenuDirective,
        PropertiesComponent,
        RadioButtonComponent,
        RadioTabsComponent,
        RadioTabComponent,        
        ResizePanelComponent,
        SidebarComponent,
        SidenavComponent,        
        SliderComponent,
        StackPanelComponent,
        SwitchComponent,
        TabComponent,
        TabsComponent,        
        TextareaComponent,
        TextBoxComponent,
        ThumbComponent,
        ToastComponent,
        ToolbarComponent,
        TooltipComponent,
        TooltipDirective,
        TreeComponent,
        TreeItemComponent,
        VirtualPanelComponent,
        VsFor
    ],
    entryComponents: [
        AlertDialog,
        ConfirmDialog,
        ColumnFilterPopup,
        GridSettingsDialog,
        ErrorToast
    ],
    providers: [
        ClipboardService,
        DialogService,
        ToastService,       
        CompatibilityService,
        { provide: COMPILER_OPTIONS, useValue: {}, multi: true},
        { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]}
    ]
})
export class ControlsModule { 
    static dialog: DialogService;
    static toast: ToastService;
    static IsDevMode: boolean;
 
    constructor(dialog: DialogService, toast: ToastService) {
        ControlsModule.dialog = dialog;
        ControlsModule.toast = toast;
    }

    static forRoot(devMode?: boolean)
    {
        var module = ControlsModule;
        module.IsDevMode = true;
        return module;
        //return { ngModule: module }
    }
}