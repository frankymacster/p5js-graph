const findByText = (nodes, text) => {
  return nodes.find(n => n.text === text);
}

// https://stackoverflow.com/questions/1484506/random-color-generator
const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const HAS = '&ni;';
const AND = '<br />';
const SO = '&nbsp;';
const NOT = '&not;';
const NOTEQ = '&#8800;';
const GE = '&ge;';
const UNION = '&cup;';
