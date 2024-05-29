import Spreadsheet from "react-spreadsheet";

const ReactSpreadSheet = () => {
    const columnLabels = [ "Item", "Categories", "qty", "total",];
    const rowLabels = [ "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", ];
    const data = [
        [{ "value": "KS PEPPER GR" }, { "value": "Spices" }, { "value": "3" }, { "value": "3.99" }],
        [{ "value": "KS MED SALT" }, { "value": "Spices" }, { "value": "3" }, { "value": "3.49" }],
        [{ "value": "KS VANILLA" }, { "value": "Baking Goods" }, { "value": "9" }, { "value": "9.99" }],
        [{ "value": "MRM ANTIOX TIPS TO" }, { "value": "Supplements" }, { "value": "4" }, { "value": "4.97" }],
        [{ "value": "GREEK YOGURT" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.32" }],
        [{ "value": "BANANAS EGGS" }, { "value": "Produce" }, { "value": "1" }, { "value": "1.49" }],
        [{ "value": "OMEGA-STRAWBRY WFFL" }, { "value": "Frozen Foods" }, { "value": "10" }, { "value": "10.99" }],
        [{ "value": "STRWBERRY WFFL" }, { "value": "Frozen Foods" }, { "value": "6" }, { "value": "6.79" }],
        [{ "value": "NERI ORG BUTR" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.29" }],
        [{ "value": "ORGANIC CHEESE" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.49" }],
        [{ "value": "BLUE CHEESE" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.15" }],
        [{ "value": "OLIVES" }, { "value": "Condiments" }, { "value": "2" }, { "value": "2.79" }],
        [{ "value": "FIRM TOFU" }, { "value": "Produce" }, { "value": "1" }, { "value": "2.15" }],
        [{ "value": "SM RED POTA" }, { "value": "Produce" }, { "value": "5" }, { "value": "5.79" }],
        [{ "value": "AVOCADOS" }, { "value": "Produce" }, { "value": "7" }, { "value": "7.49" }],
        [{ "value": "MOZZ/OG 2/1#" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.82" }]
    ];
    return (
        <Spreadsheet data={data} 
            columnLabels={columnLabels}
            rowLabels={rowLabels}
        />
    );
};

export default ReactSpreadSheet;