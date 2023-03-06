/**
 * 二维和多维数组
 */
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

console.log(averageTemp)

/**
 * 迭代二维数组的元素
 * @param myMatrix
 */
function printMatrix(myMatrix){
    for (let i =0; i<myMatrix.length;i++){
        for(let j =0; j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j])
        }
    }
}

printMatrix(averageTemp)

/**
 * 多维数组
 */

const matrix3x3x3 = [];
for (let i =0 ;i<3;i++){
    matrix3x3x3[i] =[];
    for (let j =0;j<3;j++){
        matrix3x3x3[i][j]=[]
        for (let z =0; z<3;z++){
            matrix3x3x3[i][j][z] =i+j+z;
        }
    }
}
console.log(matrix3x3x3)


for (let i =0 ;i<matrix3x3x3.length;i++){
    for (let j =0;j<matrix3x3x3[i].length;j++){
        for (let z =0; z<matrix3x3x3[i][j].length;z++){
            console.log(matrix3x3x3[i][j][z])
        }
    }
}
