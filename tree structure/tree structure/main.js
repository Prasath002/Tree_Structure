let gridApi;

/** @type {import('ag-grid-community').GridOptions} */
const gridOptions = {
    columnDefs: [
        {
            field: 'Status',
            headerName: 'Status',
            cellRenderer: 'statusCellRenderer',
        },
        { field: 'CustomerName', headerName: 'CustomerName' },
        { field: 'DeliveryDate', headerName: 'Delivery Date' },
        { field: 'Quantity', headerName: 'Quantity' },
        {
            field: 'Process',
            cellRenderer: 'processCellRenderer',
        },
        {
            field: 'Action',
            headerName: 'Action',
            cellRenderer: 'actionCellRenderer', // Custom cell renderer for the "Action" column
        },
    ],
    defaultColDef: {
        flex: 1,
    },
    autoGroupColumnDef: {
        headerName: 'SalesOrder ID',
        minWidth: 300,
        cellRendererParams: {
            suppressCount: true,
        },
    },
    rowData: getData(),
    treeData: true,
    groupDefaultExpanded: 0,
    getDataPath: (data) => {
        return data.orgHierarchy;
    },
    frameworkComponents: {
        // Define custom cell renderer components
        processCellRenderer: ProcessCellRenderer,
        actionCellRenderer: ActionCellRenderer,
    },
};

// Custom cell renderer component for the "Process" column
function ProcessCellRenderer(params) {
    const cellValue = params.value;
    const processes = cellValue.split(',');

    const cellContainer = document.createElement('div');

    processes.forEach((process) => {
        const button = document.createElement('button');
        button.innerHTML = process;
        button.className = 'custom-button';

        button.addEventListener('click', (event) => {
            const clickedProcess = event.target.innerHTML;
            showModal(clickedProcess);
        });

        cellContainer.appendChild(button);
    });

    return cellContainer;
}



// Custom cell renderer component for the "Action" column
function ActionCellRenderer() {
    const cellContainer = document.createElement('div');

    const eyeIcon = document.createElement('i');
    eyeIcon.className = 'fas fa-eye'; // Assuming you have the FontAwesome library

    eyeIcon.addEventListener('click', () => {
        // Handle the action when the eye icon is clicked
        alert('Eye icon clicked!');
    });

    cellContainer.appendChild(eyeIcon);

    return cellContainer;
}

function onFilterTextBoxChanged() {
    gridApi.setQuickFilter(document.getElementById('filter-text-box').value);
}

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    gridApi = new agGrid.Grid(gridDiv, gridOptions);
});

// The rest of your code remains unchanged
