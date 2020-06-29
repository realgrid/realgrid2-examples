var ds, treeContainer, tree;
var rows;

function createGrid(container) {
    ds = new RealGrid.LocalTreeDataProvider(true);
    ds.setFields(fields_tree);
    
    tree = new RealGrid.TreeView(container);
    tree.setDataSource(ds);

    tree.setColumns(columns_tree);
    // rows, treeField, needSorting, childrenField, iconField
    ds.setRows(treeData, 'treeId', false, null, "iconField");
    // loadData('sample.csv');
    // loadData('sample.json')
    tree.setOptions({
        undoable: true
    });
    
    const images = new RealGrid.ImageList("tree", "/images/flags/");
    images.addUrls(
        "br.png", "de.png", "es.png", "fr.png", "gr.png", "hu.png", "is.png",
        "kr.png", "mx.png", "pt.png", "us.png", "ve.png"
    )
    tree.registerImageList(images);

    tree.setTreeOptions({
        iconImages: "tree",
        defaultIcon: 0
    })

    tree.onCommandStackChanged = function (tree, undoable, redoable) {
        btnUndo.disabled = !undoable;
        btnRedo.disabled = !redoable;
    }
};

function setActions(actionContainer) {
    btnUndo = createButton(actionContainer, "Undo", function (e) {
        tree.undo();
    });
    btnRedo = createButton(actionContainer, "Redo", function (e) {
        tree.redo();
    });
    btnUndo.disabled = true;
    btnRedo.disabled = true;
    createButton(actionContainer, "Expand All", function (e) {
        tree.expandAll();
    });
    createButton(actionContainer, "Collapse All", function (e) {
        tree.collapseAll();
    });
}
