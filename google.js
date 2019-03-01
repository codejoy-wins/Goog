var setOfsets = [
    [
        3,4,5,6,7,8,9
    ],
    [
        "moose", "cat", "wolf", "dog"
    ],
    [
        13,4,5,16,17,8,9
    ],
    [
        "superman", "spiderman", "dog", 5
    ],
]

const OthersetOfsets = [
    [
        "blue", "pink", "unique"
    ],
    [
        "fire", "blue", "pink", "fire"
    ],
    [
        13,14,15,16,17,13,"pink",
    ],
    [
        "blue", "crab", 13, 15,
    ],
]

const OthersetOfsets2 = [
    [
        "blue", "blue", "blue"
    ],
    [
        "blue", "blue", "blue", "blue"
    ],
    [
        "blue","blue",
    ],
    [
        "blue", "red", "blue", "blue",
    ],
]
// that should eliminate the double blue set and preserve the one providing red novelty. --> [b,b,b],[b,b,b,b],[b,r,b,b]

// write a function that removes the most unique set     (in a set of sets)

// Lots of different strategies:

// give each set a score of how much it shares with the data set.

// give each set a score of how much novelty it contributes.

// percentage unique, dupes added, 

// Edge Cases: Self-Similarity (not solved)


function remover(ss){

    console.log(`
        *****
            Original Set: ${ss}
        *****
    `)
    // console.log(`removing most unique set of  ${ss}`);
    // console.log(`one  set is  ${ss[0]}`);
    let masterSet = [];
    for(let i =0; i < ss.length; i++){
        masterSet.push(...ss[i]);
    }
    // console.log(masterSet);
    let newSet = [];
    let dupes = [];
    for(let j = 0; j < masterSet.length; j++){
        if(newSet.includes(masterSet[j])){
            // console.log(`${masterSet[j]} is a duplicate`);
            dupes.push(masterSet[j]);
        }else{
            // console.log(`${masterSet[j]} is acceptable `);
            newSet.push(masterSet[j]);
        }
    }
    // console.log(`newSet ${newSet}`);
    // console.log(`dupes ${dupes}`);
    // now I know what the dupes are, I can go back through the original setOfsets checking for which array has most dupes.

    let masterySet = [];

    // console.log(`ss is ${ss}`);
    for(let x = 0; x < ss.length; x++){
        let duper = 0;
        // console.log(ss[x]);
        for(let k = 0; k < ss[x].length; k++){
            // console.log(ss[x][k]);
            let crux = ss[x][k];
            if(dupes.includes(crux)){
                duper++;
            }
        }
        masterySet.push({
            set: ss[x],
            dupecount: duper,
        })
    }

    // for each object in mastery set, which has the most dupes?
    let max = 0;
    let min = masterySet[0].dupecount;
    let minspot = 0;
    let spot = 0;
    let z =0;
    for(z = 1; z < masterySet.length; z++){
        if( max < masterySet[z].dupecount){
            max = masterySet[z].dupecount;
            spot = z;
        }
        if( min > masterySet[z].dupecount){
            min = masterySet[z].dupecount;
            minspot = z;
        }
    }
    console.log(`max of ${max}  dupes discovered at set ${spot} `);
    console.log(`min of ${min}  dupes discovered at set ${minspot} `);

    // console.log(`min of ${min}  dupes discovered at set ${minspot} `);
    // now remove the guilty set.

    let lessUniqueSet = [];
    for(let h=0; h < ss.length; h++){
        if(h!= minspot) // change minspot to spot if you want to remove the least unique.
        lessUniqueSet.push(ss[h]);
    }
    console.log(`
    ********
    final set is ${lessUniqueSet}
    ********
    `);
}

remover(setOfsets);
remover(OthersetOfsets);
remover(OthersetOfsets2);

// This is a solution to the algorithm Google gave me in a phone interview.