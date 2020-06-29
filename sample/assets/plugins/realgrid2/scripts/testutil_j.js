
function cellClick(cell, x, y, bubbles) {
    bubbles = bubbles != undefined ? bubbles : true

    if (x == null || y == null) {
        let rect = cell.getBoundingClientRect();
        x == null && (x = rect.left + rect.width / 2);
        y == null && (y = rect.top + rect.height / 2);
    };
    // down/up을 하는 이유는 gridTool의 _clickElement를 일치시키기 위해서 이다.
    cell.dispatchEvent(new MouseEvent('mousedown', { clientX: x, clientY: y, bubbles: bubbles }));
    cell.dispatchEvent(new MouseEvent('mouseup', { clientX: x, clientY: y, bubbles: bubbles }));
    // 실제 클릭이벤트를 발생시킨다.
    // cell의 disabled여부에 관계없이 발생한다. 막아줘야 한다.
    !cell.disabled && cell.dispatchEvent(new MouseEvent('click', { clientX: x, clientY: y, bubbles: bubbles }));

}
function cellMouseDownUp(cell, lastChild, bubbles) {
    lastChild = lastChild != undefined ? lastChild : false;
    bubbles = bubbles != undefined ? bubbles : true
    lastChild && (cell = finallyChild(cell));
    const rect = cell.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    cell.dispatchEvent(new MouseEvent('mousedown', { clientX: x, clientY: y, bubbles: bubbles }));
    cell.dispatchEvent(new MouseEvent('mouseup', { clientX: x, clientY: y, bubbles: bubbles }));

}
// gridView에서 cell의 위치를 넘겼을때 마우스자리의 element를 가져온다.
function findElt(doc, cell) {
    !doc && (doc = contDoc);
    let rect = cell.getBoundingClientRect();
    return doc.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
}

function finallyChild(cell) {
    return cell.firstElementChild ? finallyChild(cell.firstElementChild) : cell;
}

// itemIndex를 넘겼을때 화면에서 보이는 순서 fixedRowBar를 감안
function contentRowIndex(index) {
    if (!gridView) {
        return null;
    };
    const topIndex = gridView.topIndex;
    const fixedRow = gridView.fixedOptions.rowCount;
    const bar = ((fixedRow <= 0) || (index < fixedRow)) ? 0 : 1;
    return index + bar - topIndex;
}
function renderGrid(grid, layoutNeed) {
    layoutNeed = layoutNeed == undefined ? true : layoutNeed;
    grid.container._layoutNeeded = layoutNeed;
    grid.container._render(Date.now());
}

function collapseAll(grid, recursive) {
    var childs = grid.itemSource._groupedProvider && grid.itemSource._groupedProvider.rootItem && grid.itemSource._groupedProvider.rootItem._children
    var i, cnt = childs.length, child;
    for (i = 0; i < cnt ; i++) {
        child = childs[i];
        (child instanceof RealGrid.GroupItemImpl || child instanceof RealGrid.MergedGroupHeader) && grid.collapse(child, recursive, true);
    }
}

function expandAll(grid, recursive, level) {
    var childs = grid.itemSource._groupedProvider && grid.itemSource._groupedProvider.rootItem && grid.itemSource._groupedProvider.rootItem._children
    var i, cnt = childs.length, child;
    for (i = 0; i < cnt ; i++) {
        child = childs[i];
        (child instanceof RealGrid.GroupItemImpl || child instanceof RealGrid.MergedGroupHeader) && grid.expand(child, recursive, true, level);
    }
}

function getParentItem(item, level) {
    if (item instanceof RealGrid.GroupItemImpl && (item == null || item.level === level)) {
        return item;
    } else if (item.parent) {
        return getParentItem(item.parent);
    } else {
        return null;
    }    
}