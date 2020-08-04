interface InsertMines {
    minefields: Array<number[]>;
    map: Object;
}
export declare const mines: {
    isMine: (minefields: Array<number[]>, rowIndex: number, columnIndex: number) => boolean;
    setMine: (row: Array<number>) => Array<number>;
    insertMines: (currentMinefields: Array<number[]>, minesQuantity: number) => InsertMines;
};
export default mines;
