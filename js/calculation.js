//*********** Port Forward Draft ***********
const portFwdDraftInput = document.querySelector('.port-fwd-draft-init-input');

let portFwdDraftInitial = localStorage.getItem('portFwdDraftInitialLS') || portFwdDraftInput.value; // retrieve initial value from local storage, or use the input value if local storage is empty

// set the initial value of the input field to the retrieved value
portFwdDraftInput.value = portFwdDraftInitial;

portFwdDraftInput.addEventListener('input', () => {
  portFwdDraftInitial = portFwdDraftInput.value; // update value when input changes
  localStorage.setItem('portFwdDraftInitialLS', portFwdDraftInitial); // store the updated value in local storage
  console.log(`Port Fwd Initial Draft is: ${portFwdDraftInitial}`); // log the updated value
});


//*********** Port Mid Draft ***********
const portMidDraftInput = document.querySelector('.port-mid-draft-init-input');

let portMidDraftInitial = localStorage.getItem('portMidDraftInitialLS') || portMidDraftInput.value; // retrieve initial value from local storage, or use the input value if local storage is empty

portMidDraftInput.value = portMidDraftInitial;

portMidDraftInput.addEventListener('input', () => {
  portMidDraftInitial = portMidDraftInput.value; // update value when input changes
  localStorage.setItem('portMidDraftInitialLS', portMidDraftInitial); // store the updated value in local storage
  console.log(`Port Mid Initial Draft is: ${portMidDraftInitial}`); // log the updated value
});

//*********** Port Aft Draft ***********
const portAftDraftInput = document.querySelector('.port-aft-draft-init-input');

let portAftDraftInitial = localStorage.getItem('portAftDraftInitialLS') || portAftDraftInput.value; // retrieve initial value from local storage, or use the input value if local storage is empty

portAftDraftInput.value = portAftDraftInitial;

portAftDraftInput.addEventListener('input', () => {
  portAftDraftInitial = portAftDraftInput.value; // update value when input changes
  localStorage.setItem('portAftDraftInitialLS', portAftDraftInitial); // store the updated value in local storage
  console.log(`Port Aft Initial Draft is: ${portAftDraftInitial}`); // log the updated value
});


//*********** Stbd Fwd Draft ***********
const stbdFwdDraftInput = document.querySelector('.stbd-fwd-draft-init-input');

let stbdFwdDraftInitial = localStorage.getItem('stbdFwdDraftInitialLS') || portMidDraftInput.value; // retrieve initial value from local storage, or use the input value if local storage is empty

stbdFwdDraftInput.value = stbdFwdDraftInitial;

stbdFwdDraftInput.addEventListener('input', () => {
  stbdFwdDraftInitial = stbdFwdDraftInput.value; // update value when input changes
  localStorage.setItem('stbdFwdDraftInitialLS', stbdFwdDraftInitial); // store the updated value in local storage
  console.log(`Stbd Fwd Initial Draft is: ${stbdFwdDraftInitial}`); // log the updated value
});

//*********** Stb Mid Draft ***********
const stbdMidDraftInput = document.querySelector('.stbd-mid-draft-init-input');

let stbdMidDraftInitial = localStorage.getItem('stbdMidDraftInitialLS') || portMidDraftInput.value; // retrieve initial value from local storage, or use the input value if local storage is empty

stbdMidDraftInput.value = stbdMidDraftInitial;

stbdMidDraftInput.addEventListener('input', () => {
  stbdMidDraftInitial = stbdMidDraftInput.value; // update value when input changes
  localStorage.setItem('stbdMidDraftInitialLS', stbdMidDraftInitial); // store the updated value in local storage
  console.log(`Stbd Mid Initial Draft is: ${stbdMidDraftInitial}`); // log the updated value
});

//*********** Stb Aft Draft ***********
const stbdAftDraftInput = document.querySelector('.stbd-Aft-draft-init-input');

let stbdAftDraftInitial = localStorage.getItem('stbdAftDraftInitialLS') || portMidDraftInput.value; // retrieve initial value from local storage, or use the input value if local storage is empty

stbdAftDraftInput.value = stbdAftDraftInitial;

stbdAftDraftInput.addEventListener('input', () => {
  stbdAftDraftInitial = stbdAftDraftInput.value; // update value when input changes
  localStorage.setItem('stbdAftDraftInitialLS', stbdAftDraftInitial); // store the updated value in local storage
  console.log(`Stbd Aft Initial Draft is: ${stbdAftDraftInitial}`); // log the updated value
});

