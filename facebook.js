// given list of birth and death years, calculate year with highest population

// My strategy for this problem is to make one large array with all the years that had someone alive.
// for the first person, 2000 to 2010, I want to extract all those years to my array so 2010,2011,2012...2019,2020.
// Once I've reduced the problem to a list of numbers I can solve it easily by finding the mode of my array.
// the most frequent number in my list will mean most people were alive at that time. 
// helper function for the mode

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
// Gayle's data

const people = [
    [2000,2010],
    [1975, 2005],
    [1975, 2003],
    [1803, 1809],
    [1750, 1869],
    [1840, 1935],
    [1803, 1921],
    [1894, 1921],
]
// my data

const aliens = [
    [1850,1950],
    [1935, 2015],
    [1945, 1960],
    [1952, 1968],
]
// my solution
function population(r){
    let mastery = [];
    let master = [];
    let dupes = 0;
    let newObj ={
        year: 0,
        count: 0,
    }
    for(let i=0;i<r.length;i++){
        for(let j=r[i][0]; j <= r[i][1]; j++){
            if(master.includes(j)){
                dupes++;
            }
            master.push(j);

            newObj ={
                year: j,
                count: dupes,
            }
        }
        mastery.push(newObj);
    }
    console.log(`find the mode of ${master} done`);
    let ans2 = mode(master);
    console.log(` mode === ${ans2}`);
    return ans2;
}
// population(people);
console.log(population(aliens));

// The correct answer for her data is the year 2000