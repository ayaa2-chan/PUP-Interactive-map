
// Panel elements
const infoRightPanel = document.getElementById('infoRightPanel');
const infoLeftPanel = document.getElementById('infoLeftPanel');
const overlay = document.getElementById('overlay');

// Function to close panels
function closePanel() {
  infoRightPanel.style.display = 'none';
  infoLeftPanel.style.display = 'none';
  overlay.style.display = 'none';
  infoRightPanel.src = '';
  infoLeftPanel.src = '';
}

// Function to open panel
function openPanel(panel, htmlPath) {
  panel.src = htmlPath;
  panel.style.display = 'block';
  overlay.style.display = 'block';
}

// Close panel when clicking overlay
overlay.addEventListener('click', closePanel);

// Allow iframe to request closing from inside
window.addEventListener('message', (event) => {
  if (event.data === 'closePanel') {
    closePanel();
  }
});

// Location configurations
const locations = {

  // Left side locations 
  leftSide: [
    { id: 'mainBldg', path: 'LeftParts/mainBldg.html' },
    { id: 'oval', path: 'LeftParts/ovalField.html' },
    { id: 'lagoon', path: 'LeftParts/lagoon.html' },
    { id: 'chapel', path: 'LeftParts/chapel.html' },
    { id: 'lib', path: 'LeftParts/lib.html' },
    { id: 'ousBldg', path: 'LeftParts/ousBldg.html' },
    { id: 'cdr', path: 'LeftParts/cdr.html' },
    { id: 'obelisk', path: 'LeftParts/obelisk.html' },
    { id: 'linear', path: 'LeftParts/linear.html' }
  ],
  
  // Right side locations
  rightSide: [
    { id: 'pylon', path: 'RightParts/pylon.html' },
    { id: 'mural', path: 'RightParts/mural.html' },
    { id: 'visitors', path: 'RightParts/visitor.html' },
    { id: 'gym', path: 'RightParts/gym.html' },
    { id: 'alumni', path: 'RightParts/alumni.html' },
    { id: 'pool', path: 'RightParts/pool.html' },
    { id: 'court', path: 'RightParts/court.html' },
    { id: 'research', path: 'RightParts/research.html' },
    { id: 'catWalk', path: 'RightParts/catwalk.html' },
    
    // Upper locations
    { id: 'coc', path: 'UpperParts/coc.html' },
    { id: 'cea', path: 'UpperParts/cea.html' },
    { id: 'itech', path: 'UpperParts/itech.html' },
    { id: 'BPoffice', path: 'UpperParts/BPoffice.html' },
    { id: 'hasmin', path: 'UpperParts/hasminBldg.html' }
  ]
};

// For left side locations
locations.leftSide.forEach(location => {
  const element = document.getElementById(location.id);
  if (element) {
    element.addEventListener('click', () => {
      openPanel(infoRightPanel, location.path);
    });
  }
});

//  For right side locations
locations.rightSide.forEach(location => {
  const element = document.getElementById(location.id);
  if (element) {
    element.addEventListener('click', () => {
      openPanel(infoLeftPanel, location.path);
    });
  }
});
