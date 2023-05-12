function handleDraftInput(draftInputClass, draftInitialLS, meanDraftInitLS, resultClass) {
  const draftInput = document.querySelector(draftInputClass);
  let draftInitial = localStorage.getItem(draftInitialLS) || draftInput.value;
  let meanDraftInit = localStorage.getItem(meanDraftInitLS);

  draftInput.value = draftInitial;

  if (meanDraftInit) {
    document.querySelector(resultClass).innerHTML = meanDraftInit;
  }

  draftInput.addEventListener('input', () => {
    draftInitial = draftInput.value;
    localStorage.setItem(draftInitialLS, draftInitial);
    meanDraftInit = meanCalculation(+draftInitial);
    localStorage.setItem(meanDraftInitLS, meanDraftInit);
    console.log(`Draft Initial is: ${draftInitial}`);
    console.log(`Mean Draft Initial: ${meanDraftInit}`);
    document.querySelector(resultClass).innerHTML = meanDraftInit;
  });
}

// Function to calculate the mean draft
function meanCalculation(value) {
  return value / 2;
}

// Call the function for each draft type
handleDraftInput('.port-fwd-draft-init-input', 'portFwdDraftInitialLS', 'fwdMeanDraftInitLS', '.fwd-draft-init-result');
handleDraftInput('.stbd-fwd-draft-init-input', 'stbdFwdDraftInitialLS', 'fwdMeanDraftInitLS', '.fwd-draft-init-result');

handleDraftInput('.port-mid-draft-init-input', 'portMidDraftInitialLS', 'midMeanDraftInitLS', '.mid-draft-init-result');
handleDraftInput('.stbd-mid-draft-init-input', 'stbdMidDraftInitialLS', 'midMeanDraftInitLS', '.mid-draft-init-result');

handleDraftInput('.port-aft-draft-init-input', 'portAftDraftInitialLS', 'aftMeanDraftInitLS', '.aft-draft-init-result');
handleDraftInput('.stbd-aft-draft-init-input', 'stbdAftDraftInitialLS', 'aftMeanDraftInitLS', '.aft-draft-init-result');
