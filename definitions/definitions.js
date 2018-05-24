const getDefinitions = () => {
  const definitions = [
    [{
      id: '0',
      text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors',
    }, {
      id: '01',
      text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; G.edges.(&ni; n) &ni; e <br />&nbsp; &nbsp; &nbsp; n.neighbors = n.neighbors &cup; {e \ n}',
    }], [{
      id: '0',
      text: 'graphs.regular.k &ni; G',
    }, {
      id: '01',
      text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors.# = k',
    }], [{
      id: '0',
      text: 'G.edges &ni; e<br />&nbsp; graphs.&not;connected &ni; G - {e}',
    }, {
      id: '01',
      text: 'e.nodes &ni; n<br />&nbsp; graphs.&not;connected &ni; G - {n}',
    }], [{
      id: '0',
      text: 'G.nodes &supe; S<br />&nbsp; graphs.&not;connected &ni; G - S',
    }, {
      id: '01',
      text: '&nbsp; &nbsp; (G - S).components.# &gt; 1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H2<br />&nbsp; &nbsp; &nbsp; &and;',
    }],
  ];

  return definitions;
};
