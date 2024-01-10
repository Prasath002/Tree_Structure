function getData() {
    var rowData = [
        {
            orgHierarchy: ['salesOrder001'],
            Status: 'Completed',
            DeliveryDate: '12/02/2024',
            CustomerName: ['Customer1'],
            Quantity: '',
            Process: '',
            Action: 'Eye Symbol',
        },
        {
            orgHierarchy: ['salesOrder001', 'Master Product001'],
            DeliveryDate: '12/02/2024',
            Quantity: '500',
            Process: 'Quality Check'
        },

        {
            orgHierarchy: ['salesOrder001', 'Master Product002'],
            DeliveryDate: '12/02/2024',
            Quantity: '300',
            Process: 'Quality Check'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product003',
            ],
            DeliveryDate: '12/02/2024',
            Quantity: '600',
            Process: 'Packing'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product001',
                'Item001',
            ],
            DeliveryDate: '12/02/2024',
            Quantity: '200',
            Process: 'Bending, Powder Coating'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product001',
                'Item002',

            ],
            DeliveryDate: '12/02/2024',
            Quantity: '800',
            Process: 'Bending, Cutting'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product001',
                'Item001',
                'SubItem001',
            ],
            DeliveryDate: '12/02/2024',
            Quantity: '200',
            Process: 'Bending, Welding'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product001',
                'Item001',
                'SubItem002',
            ],
            DeliveryDate: ' ',
            Quantity: '300',
            Process: 'Cutting'
        },

        {
            orgHierarchy: ['salesOrder001', 'Master Product001', 'Item002', 'SubItem001'],
            DeliveryDate: '12/02/2024',
            Quantity: '100',
            Process: 'Powder Coating, Welding'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product002',
                'Item001',
            ],
            DeliveryDate: '12/02/2024',
            Quantity: '200',
            Process: 'Welding, Cutting'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product002',
                'Item002',

            ],
            DeliveryDate: '12/02/2024',
            Quantity: '800',
            Process: 'Bending'

        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product002',
                'Item001',
                'SubItem001',
            ],
            DeliveryDate: '12/02/2024',
            Quantity: '200',
            Process: 'Bending, Cutting'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product002',
                'Item001',
                'SubItem002',
            ],
            DeliveryDate: ' ',
            Quantity: '300',
            Process: 'Welding'
        },

        {
            orgHierarchy: ['salesOrder001', 'Master Product002', 'Item002', 'SubItem001'],
            DeliveryDate: '12/02/2024',
            Quantity: '100',
            Process: 'Bending, Cutting'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product001',
                'Item001',
            ],
            DeliveryDate: '12/02/2024',
            Quantity: '200',
            Process: 'Bending, Cutting'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product003',
                'Item002',

            ],
            DeliveryDate: '12/02/2024',
            Quantity: '800',
            Process: ' Cutting'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product003',
                'Item001',
                'SubItem001',
            ],
            DeliveryDate: '12/02/2024',
            Quantity: '200',
            Process: 'Welding'
        },
        {
            orgHierarchy: [
                'salesOrder001',
                'Master Product003',
                'Item001',
                'SubItem002',
            ],
            DeliveryDate: ' ',
            Quantity: '300',
            Process: 'Welding'
        },

        {
            orgHierarchy: ['salesOrder001', 'Master Product003', 'Item002', 'SubItem001'],
            DeliveryDate: '12/02/2024',
            Quantity: '100',
            Process: 'Bending, Cutting'
        },
    ];
    return rowData;
}
