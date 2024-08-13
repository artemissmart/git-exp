export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
    const paginationRange = useMemo(()=>{
        const totalPageCount = Math.ceil(totalCount / pageSize);



    //Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        /*
        Case 1:
        if the number of pages is less than the page numbers we want to show in 
        our paginationComponent, we return the range [1..totalPageCount]

        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }
        /*
            Calculate left and right sibling index and make sure they
            are within range 1 and totalPageCount

        */
        const leftSiblingIndex    


},[totalCount, pageSize, siblingCount, currentPage]);
    return paginationRange;
}

const range = (start, end) => {
    let length = end - start +1;

    [start, end]

    return Array.from({length}, (_, idx) => idx + start) 
};