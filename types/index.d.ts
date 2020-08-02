export declare const isMine: (minefields: number[][], rowIndex: number, columnIndex: number) => boolean;
declare const minefieldCore: {
    generate: (columns: number, rows: number, minesQuantity: number) => Array<number[]>;
};
export default minefieldCore;
