
function meanCalculation(a, b){
  return ((a+b)/2);
}


//*********** Port Forward Draft ***********
const portFwdDraftInput = document.querySelector('.port-fwd-draft-init-input');
let portFwdDraftInitial = localStorage.getItem('portFwdDraftInitialLS') || portFwdDraftInput.value;
let fwdMeanDraftInit = localStorage.getItem('fwdMeanDraftInitLS'); // retrieve fwdMeanDraftInit value from local storage

portFwdDraftInput.value = portFwdDraftInitial;

if (fwdMeanDraftInit) {
  document.querySelector('.fwd-draft-init-result').innerHTML = fwdMeanDraftInit;
}

portFwdDraftInput.addEventListener('input', () => {
  portFwdDraftInitial = portFwdDraftInput.value;
  localStorage.setItem('portFwdDraftInitialLS', portFwdDraftInitial);
  fwdMeanDraftInit = meanCalculation(+portFwdDraftInitial, +stbdFwdDraftInitial);
  localStorage.setItem('fwdMeanDraftInitLS', fwdMeanDraftInit); // store fwdMeanDraftInit value in local storage
  console.log(`Port Fwd Initial Draft is: ${portFwdDraftInitial}`);
  console.log(`Mean Fwd Draft Initial: ${fwdMeanDraftInit}`);
  document.querySelector('.fwd-draft-init-result').innerHTML = fwdMeanDraftInit;
});


//*********** Port Mid Draft ***********
const portMidDraftInput = document.querySelector('.port-mid-draft-init-input');
let portMidDraftInitial = localStorage.getItem('portMidDraftInitialLS') || portMidDraftInput.value;
let midMeanDraftInit = localStorage.getItem('midMeanDraftInitLS'); // retrieve fwdMeanDraftInit value from local storage

portMidDraftInput.value = portMidDraftInitial;

if (midMeanDraftInit) {
  document.querySelector('.mid-draft-init-result').innerHTML = midMeanDraftInit;
}

portMidDraftInput.addEventListener('input', () => {
  portMidDraftInitial = portMidDraftInput.value;
  localStorage.setItem('portMidDraftInitialLS', portMidDraftInitial);
  midMeanDraftInit = meanCalculation(+portMidDraftInitial, +stbdMidDraftInitial);
  localStorage.setItem('midMeanDraftInitLS', midMeanDraftInit); // store fwdMeanDraftInit value in local storage
  console.log(`Port Mid Initial Draft is: ${portMidDraftInitial}`);
  console.log(`Mean Mid Draft Initial: ${midMeanDraftInit}`);
  document.querySelector('.mid-draft-init-result').innerHTML = midMeanDraftInit;
});

//*********** Port Aft Draft ***********


//*********** Stbd Fwd Draft ***********
const stbdFwdDraftInput = document.querySelector('.stbd-fwd-draft-init-input');
let stbdFwdDraftInitial = localStorage.getItem('stbdFwdDraftInitialLS') || stbdFwdDraftInput.value;
fwdMeanDraftInit = localStorage.getItem('fwdMeanDraftInitLS'); // retrieve fwdMeanDraftInit value from local storage

stbdFwdDraftInput.value = stbdFwdDraftInitial;

if (fwdMeanDraftInit) {
  document.querySelector('.fwd-draft-init-result').innerHTML = fwdMeanDraftInit;
}

stbdFwdDraftInput.addEventListener('input', () => {
  stbdFwdDraftInitial = stbdFwdDraftInput.value;
  localStorage.setItem('stbdFwdDraftInitialLS', stbdFwdDraftInitial);
  fwdMeanDraftInit = meanCalculation(+portFwdDraftInitial, +stbdFwdDraftInitial);
  localStorage.setItem('fwdMeanDraftInitLS', fwdMeanDraftInit); // store fwdMeanDraftInit value in local storage
  console.log(`Port Fwd Initial Draft is: ${stbdFwdDraftInitial}`);
  console.log(`Mean Fwd Draft Initial: ${fwdMeanDraftInit}`);
  document.querySelector('.fwd-draft-init-result').innerHTML = fwdMeanDraftInit;
});


//*********** Stb Mid Draft ***********

const stbdMidDraftInput = document.querySelector('.stbd-mid-draft-init-input');
let stbdMidDraftInitial = localStorage.getItem('stbdMidDraftInitialLS') || stbdMidDraftInput.value;
midMeanDraftInit = localStorage.getItem('midMeanDraftInitLS'); // retrieve fwdMeanDraftInit value from local storage

stbdMidDraftInput.value = stbdMidDraftInitial;

if (midMeanDraftInit) {
  document.querySelector('.mid-draft-init-result').innerHTML = midMeanDraftInit;
}

stbdMidDraftInput.addEventListener('input', () => {
  stbdMidDraftInitial = stbdMidDraftInput.value;
  localStorage.setItem('stbdMidDraftInitialLS', stbdMidDraftInitial);
  midMeanDraftInit = meanCalculation(+portMidDraftInitial, +stbdMidDraftInitial);
  localStorage.setItem('midMeanDraftInitLS', midMeanDraftInit); // store fwdMeanDraftInit value in local storage
  console.log(`stbd Mid Initial Draft is: $stbdtMidDraftInitial}`);
  console.log(`Mean Mid Draft Initial: ${midMeanDraftInit}`);
  document.querySelector('.mid-draft-init-result').innerHTML = midMeanDraftInit;
});

//*********** Stb Aft Draft ***********

