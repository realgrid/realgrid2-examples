var ds, treeContainer, tree;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalTreeDataProvider();
    ds.setFields(fields_tree);

    tree = new RealGrid.TreeView(container);
    tree.setDataSource(ds);
    
    tree.setColumns(columns_tree);
    // rows, treeField, needSorting, childrenField, iconField
    ds.setRows(treeData, 'treeId', false, null, "iconField");
    // loadData('sample.csv');
    // loadData('sample.json')

    const images = new RealGrid.ImageList("tree", "/images/flags/");
    images.addUrls(
        "br.png", "de.png", "es.png", "fr.png", "gr.png", "hu.png", "is.png",
        "kr.png", "mx.png", "pt.png", "us.png", "ve.png"
    )
    tree.registerImageList(images);

    tree.setEditOptions({
        insertable: true,
        appendable : true
    });

    tree.treeOptions.iconImages = "tree";
    tree.treeOptions.defaultIcon = 0;
};

function setActions(actionContainer) {
    createButton(actionContainer, "Expand All", function (e) {
        tree.expandAll();
    });
    createButton(actionContainer, "Collapse All", function (e) {
        tree.collapseAll();
    });
    // createCheckBox(actionContainer, "RowIndicator", function (e) {
    //     grid.rowIndicator.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "StateBar", function (e) {
    //     grid.stateBar.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "CheckBar", function (e) {
    //     grid.checkBar.visible = e.currentTarget.checked;
    // }, true);
    // createCheckBox(actionContainer, "Fixed Columns", function (e) {
    //     grid.setFixedOptions({colCount: e.currentTarget.checked ? 2 : 0})
    // });
    // createCheckBox(actionContainer, "Right Columns", function (e) {
    //     grid.setFixedOptions({rightCount: e.currentTarget.checked ? 2 : 0})
    // });
    // createCheckBox(actionContainer, "Fixed Rows", function (e) {
    //     grid.setFixedOptions({rowCount: e.currentTarget.checked ? 2 : 0})
    // });
    // createCheckBox(actionContainer, "Right Fixed", function (e) {
    //     grid.fixedOptions.rightFixed = e.currentTarget.checked;
    // }, true);
}
