import Spreadsheet from "react-spreadsheet";

const ReactSpreadSheet = () => {
    const columnLabels = [ "Flavour", "Quantity" ];
    const rowLabels = [ "Item 1", "Item 2" ];
    const data = [
        [{ value: "Vanilla" }, { value: "Chocolate" }],
        [{ value: "Strawberry" }, { value: "Cookies" }],
    ];
    return (
        <Spreadsheet data={data} 
            columnLabels={columnLabels}
            rowLabels={rowLabels}
        />
    );
};

export default ReactSpreadSheet;