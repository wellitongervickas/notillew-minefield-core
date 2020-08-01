export declare const mines: {
    isMine: (minefields: Array<number[]>, row: number, column: number) => boolean;
    setMine: (row: Array<number>) => Array<number>;
    insertMines: (minefields: Array<number[]>, minesQuantity: number) => Array<number[]>;
};
export default mines;
