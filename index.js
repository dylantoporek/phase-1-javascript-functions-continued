// Your code here
function saturdayFun(activity){
    activity = (typeof activity !== 'undefined') ?  activity : 'roller-skate';
    return (`This Saturday, I want to ${activity}!`);
    
}

function mondayWork(plans){
    plans = (typeof plans !== 'undefined') ? plans : 'go to the office';
    return (`This Monday, I will ${plans}.`);
}

function wrapAdjective(adj){
    adj = (typeof adj !== 'undefined') ? adj : '*';
    const part1 = 'You are';
    return function(string){
      return (`${part1} ${adj}${string}${adj}!`);
    };
     
  }