interface MinefieldCore {
    minefields: Array<number[]>;
    minesMap: Object;
}
declare const minefieldCore: {
    generate: (columns: number, rows: number, minesQuantity: number) => MinefieldCore;
};
export default minefieldCore;
