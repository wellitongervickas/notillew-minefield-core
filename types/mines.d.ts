interface InsertMines {
    minefields: Array<number[]>;
    minesMap: Object;
}
export declare const mines: {
    setMine: (currentRow: Array<number>) => Array<number>;
    insertMines: (currentMinefields: Array<number[]>, minesQuantity: number) => InsertMines;
};
export default mines;
