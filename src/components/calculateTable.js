export const calculateTableData = (tableData = [], isCheckbox = false) => {
    if (tableData.length < 1) {
      return {
        columnNames: [],
        columnsWidth: [],
        rowsData: [],
        avatarIndex: null,
      };
    }
  
    const columnNames = Object.keys(tableData[0]);
    const columnsWidth = columnNames.map((value) => `${value}`.length + 100);
    const rowsData = [];
    let avatarIndex = null;
    columnNames.forEach((value, index) => {
      if (
        `${value}`.toLowerCase() == "avatar" ||
        `${value}`.toLowerCase() == "image"
      ) {
        avatarIndex = index;
      }
    });
  
    console.log(avatarIndex);
    tableData.forEach((row) => {
      const rowData = Object.values(row);
      rowData.forEach((value, index) => {
        const valueLenght =
          (index === avatarIndex ? `${rowData[index + 1]}` : `${value}`).length +
          100;
        const currentIndexLength = columnsWidth[index];
  
        columnsWidth[index] =
          isCheckbox && index === 0
            ? 60
            : index === avatarIndex
            ? valueLenght + 30
            : currentIndexLength > valueLenght
            ? currentIndexLength
            : valueLenght + 50;
      });
      rowsData.push(rowData);
    });
    // console.log(columnNames);
    console.log(columnsWidth);
    // console.log(rowsData);
    return {
      columnNames,
      columnsWidth,
      rowsData,
      avatarIndex,
    };
  };
  