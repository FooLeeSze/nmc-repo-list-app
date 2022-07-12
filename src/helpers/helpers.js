// Function to split an array into chunks of given chunk size
export const splitArray = (arr, chunkSize) => {

    const resArr = [];

    for (let i = 0; i < arr.length; i+=chunkSize) {
        resArr.push(arr.slice(i, i+chunkSize));
    }

    return resArr;
}