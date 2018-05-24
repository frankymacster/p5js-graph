const main = () => {
  const haveEl = document.getElementById('have');
  const definitions = getDefinitions();
  definitions.forEach(d => {
    haveEl.appendChild(printTree(arrayToTree(d)));
  });

  const wantEl = document.getElementById('want');
  wantEl.appendChild(printTree(arrayToTree(getProof()), message => {
    document.getElementById('screen').contentWindow.postMessage(message, '*');
  }));
};
