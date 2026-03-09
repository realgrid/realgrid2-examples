<template>
    <div style="height: 500px; width: 100%">
        <RealGridVue ref="grid" :rows="gridData" :onCellItemClicked="onCellItemClicked">
            <RGDataField fieldName="boolean1" :dataType="RealGrid.ValueType.BOOLEAN"/>
            <RGDataField fieldName="Name" :dataType="RealGrid.ValueType.TEXT"/>
            <RGDataField fieldName="FullName" :dataType="RealGrid.ValueType.TEXT"/>
            <RGDataField fieldName="Age" :dataType="RealGrid.ValueType.NUMBER"/>
            <RGDataField fieldName="Company" :dataType="RealGrid.ValueType.TEXT"/>
            <RGDataField fieldName="Email" :dataType="RealGrid.ValueType.TEXT"/>

            <RGDataColumn name="boolean1" fieldName="boolean1" :renderer="{
                type: 'toggle',
            }"/>
            <RGDataColumn name="Name" fieldName="Name"/>
            <RGDataColumn name="FullName" fieldName="FullName"/>
            <RGDataColumn name="Age" fieldName="Age"/>
            <RGDataColumn name="Company" fieldName="Company"/>
            <RGDataColumn name="Email" fieldName="Email"/>
        </RealGridVue>
    </div>
</template>

<script setup lang="ts"> 
import * as RealGrid from 'realgrid'
import { rows } from "./realgrid-data";
import { h, onMounted, ref, render, type VNode } from 'vue';
import ToggleButton from '../components/Switch.vue'
import { RealGridVue, RGDataColumn, RGDataField } from "realgrid-vue";

const grid = ref<RealGridVue | null>()
const gridData = ref(rows)

onMounted(() => {
    if (grid.value) {
        grid.value.gridView.registerCustomRenderer("toggle", toggle);
    }
})

const toggle: RealGrid.CustomCellRenderer = {
    initContent(dom) {
        const dataRow = this.index!.dataRow;
        const dataField = "boolean1";
        this.tags = {};
        this.tags.vNode = h(ToggleButton, {dataRow, dataField, checked: false, key: Symbol(dataRow)});
        this.tags.div = dom;
    },
    clearContent(dom) {
        const vNode: VNode = this.tags!.vNode;
        vNode && vNode.el && vNode.el.parentElement === dom && dom.removeChild(vNode.el as HTMLElement)
        delete this.tags!.vNode;
    },
    render(grid, model, w, h, info) {        
        const vNode: VNode = this.tags!.vNode;
        // console.log(vNode.props);
        if (vNode.component) {
            const component = vNode.component;
            component.props.checked = !!model.item!.getData!("boolean1");
            component.update();
        } else {
            vNode.props!.checked = !!model.item!.getData!("boolean1");
            render(vNode, this.tags!.div)
        }        
    },
    canClick(event) {
        return true;
    },
    click(event) {
        if (event.target instanceof HTMLElement) {
            if (event.target.classList.contains('slider')) {
                return {
                   vueComponent: event.target
                }
            }
        }
    },
    preventClick(event) {
        event.preventDefault();
        event.stopPropagation();
        return true;
    },
}

function onCellItemClicked(grid: RealGrid.GridBase, index: RealGrid.CellIndex): boolean {
    if (!grid.isEditing() && (index.column as RealGrid.DataColumn).name === "boolean1") {
        grid.setValue(index.itemIndex!, "boolean1",  !grid.getValue(index.itemIndex!, "boolean1"));
        return false;
    }
    return true;
    
}
</script>
