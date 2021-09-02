// 1) Дана последовательность случайных цифр любой длины и «волшебное» положительное число, больше нуля. 
// Напишите функцию magic(), принимающую эти аргументы, и выясните, можно ли разделить сумму квадратов последовательности на «волшебное» число без остатка. 
// В качестве ответа возвращается «Волшебство случается» в случае успеха или «Никакого волшебства», если разделить нельзя.

// # Тесты
// magic(2, 5, 7, k=5)   Никакого волшебства
// magic(2, 5, 7, k=39) Волшебство случается
// magic(2, 5, 7, k=2)   Волшебство случается

function magic(...theArgs){
    let summ=0;
        for(let i = 0; i<theArgs.length-1; i++){
            summ+=Math.pow(theArgs[i], 2) 
        }
        
        if(summ%theArgs[theArgs.length-1]===0){
            console.log('Волшебство случается');
        } else {
            console.log('Никакого волшебства');
        }
}

magic(2, 5, 7, 5)
magic(2, 5, 7, 4)
magic(2, 5, 7, 39)
magic(2,5,7,8,2,2)



// 2) На входе имеем список строк разной длины. 
// Необходимо написать функцию all_eq(lst), которая вернет новый список из строк одинаковой длины. 
// Длину итоговой строки определяем исходя из самой большой из них. 
// Если конкретная строка короче самой длинной, дополнить ее нижними подчеркиваниями с правого края до требуемого количества символов.
// Расположение элементов начального списка не менять.

// # Тесты
// all_eq(['крот', 'белка', 'выхухоль']) -> ['крот____', 'белка___', 'выхухоль']
// all_eq(['a', 'aa', 'aaa', 'aaaa', 'aaaaa']) -> ['a____', 'aa___', 'aaa__', 'aaaa_', 'aaaaa']
// all_eq(['qweasdqweas', 'q', 'rteww', 'ewqqqqq']) -> ['qweasdqweas', 'q__________', 'rteww______', 'ewqqqqq____']


function all_eq(arr){
    let lengthLongestOne = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i].length > lengthLongestOne){
            lengthLongestOne = arr[i].length;
        }
    }

    for(i=0; i<arr.length; i++){
        if (arr[i].length < lengthLongestOne){
            let add = lengthLongestOne-arr[i].length;
            for(let j = 0; j<add; j++){
                arr[i]+='_'
            }
        }
    }
    console.log(arr)
}

all_eq(['крот', 'белка', 'выхухоль'])
all_eq(['a', 'aa', 'aaa', 'aaaa', 'aaaaa'])



// 3) Предоставлен список натуральных чисел. Требуется сформировать из них множество. 
//Если какое-либо число повторяется, то преобразовать его в строку по образцу: 
//например, если число 4 повторяется 3 раза, то в множестве будет следующая запись: 
//само число 4, строка «44» (второе повторение, т.е. число дублируется в строке), строка «444» 
//(третье повторение, т.е. строка множится на 3). Реализуйте вывод множества через функцию set_gen().

// # Тесты
// list_1 = [1, 1, 3, 3, 1]
// list_2 = [5, 5, 5, 5, 5, 5, 5]
// list_3 = [2, 2, 1, 2, 2, 5, 6, 7, 1, 3, 2, 2]
// set_gen(list_1)  -> {1, 3, '111', '33', '11'}
// set_gen(list_2) -> {'5555555', 5, '55', '55555', '5555', '555555', '555'}
// set_gen(list_3) -> {1, 2, 3, 5, 6, 7, '22', '2222', '22222', '222', '11', '222222'}

let counts = {}
function count_duplicate(a){
    for(let i =0; i < a.length; i++){ 
        if (counts[a[i]]){
        counts[a[i]] += 1;
        } else {
        counts[a[i]] = 1;
        numbers+=a[i];
        }
    }  
}  

let numbers='';
let newArr=[];
function set_gen(arr){
    count_duplicate(arr);
    for(let i = 0; i<numbers.length; i++){
        if(counts[numbers[i]]===1){
            newArr.push(+numbers[i])
        } else{
            let b = numbers[i];
            for(let j=0; j< counts[numbers[i]];j++ ){
                newArr.push(+b)  
                b+=numbers[i]
            }
        }
    }
    newArr.sort(function(a, b) {
        return a - b;
      });
    console.log(newArr)
}

 
list_3 = [2, 2, 1, 2, 2, 5, 6, 7, 1, 3, 2, 2]
set_gen(list_3)