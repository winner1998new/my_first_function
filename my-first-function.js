//создать фук-ю, которая принимает один парам-р под именнем arrayOfNumbers и возр-ет объект с 7 св-ми
// min, max, sum, length и amountOfNegative, amountOfPositive, hasZero, а также методы - reverse, 
// который возыращает перевернутый массив, toNegative - меняет значение массива на противоположный, 
// filterForMe - принимает фун-ю в качестве аргумента, которая должна возвр-ть значение true - false
// и возвр-ть отфильтрованый массив, toNormal - возращ-т массиву исходное значение.

// 1- описать фун-ю в общем виде, с парам-м arrayOfNumbers
// 2 - описать возврат, а именно объект с 7 св-ми: min, max, sum, length, amountOfNegative, amountOfPositive,
//     hasZero и 4 методами: reverse, toNegative, filterForMe, toNormal
// 3 - найти минимальное знач-е в массиве (min: number)
// 4 - найти максимальное знач-е в массиве (max: number)
// 5 - найти сумму знач-й в массиве (sum: number)
// 6 - найти длину массива (length: number)           
// 7 - найти кол-во негативных элем-тов (amountOfNegative: number)
// 8 - найти кол-во позитивных элем-тов (amountOfPositive: number)
// 9 - проверить ноль в массиве (hasZero: boolean)
// 9.1. - добавить новое св-во arrayOfNumbers со знач-м arrayOfNumbers
// 10 - написать фун-ю, без использования Array.reverse, которая вернет массив arrayOfNumbers в
//     обратном порядке. Т.е. создать цикл for, который будет записывать элем-ты массива в другой
//     массив проходя от конца к началу и возвращать его
// 11 - написать фун-ю, которая с помощью - map - внутри которого каждому элен-ту присваиваеться
//     его же значение с унарным минусом и вернуть элемент
// 12 - написать фун-ю, которая в параметрах принимает фун-ю под именем filterFunction и с помощью метода
//     массива под именем filter, внутри которого будет возвращаться результат вызова фун-и filterFunction, в
//     которую будет передаваться в качестве аргумента элемент, и возвращает отфильтрованный массив
// 13 - написать фун-ю, которая возвр-ет this.arrayOfNumbers
// 14 - заменить вызовы методов из массива arrayOfNumbers на массив this.arrayOfNumbers
// 15 - проверить работу с массивами:
//     [2, 6, 9, 25, -6] 
//     [2, 0, 2222, 2, 7]
//     [0, -22, 69999, 0, -1]
//     [3/5, -0.0000000001, 232323n, 5n, 09n, Math.PI ]
//     [25e2, Math.E, Infinity, NaN, 0n]
// 16 - запустить фун-ю createObj с другим типом данных
// 17 - попробовать оптимизировать функционал
// 18 - сохранить изменение в git, закоммитить и запушить в ветку на github


function createObj(arrayOfNumbers) {
  return {
    arrayOfNumbers: arrayOfNumbers.slice(),
    min: arrayOfNumbers.sort((a, b) => a - b)[0],
    max: arrayOfNumbers.sort((a, b) => b - a)[0],
    sum: arrayOfNumbers.reduce((sum, elem) => sum + elem, 0),
    length: arrayOfNumbers.length,
    amountOfNegative: arrayOfNumbers.filter(elem => elem < 0).length,
    amountOfPositive: arrayOfNumbers.filter(elem => elem > 0).length,
    // hasZero: arrayOfNumbers.filter(elem => elem === 0).length > 0,  
    hasZero: arrayOfNumbers.indexOf(0) > -1,  
    reverse() {
      let arrayReverse = []
      for (i = this.arrayOfNumbers.length - 1; i > -1; i--) {
        arrayReverse.push(this.arrayOfNumbers[i]) 
      }
      return arrayReverse
    },
    toNegative() {
      return this.arrayOfNumbers.map((element) => -element);
    },
    filterForMe(filterFunction) {
      // return this.arrayOfNumbers.filter((element) => filterFunction(element))
      return this.arrayOfNumbers.filter(filterFunction)
    },
    toNormal() {
      return this.arrayOfNumbers
    },
  }
}