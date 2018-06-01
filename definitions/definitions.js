const getDefinitions = () => {
  const nodes = [{
    text: 'n',
    x: getPos(1),
    y: getPos(1),
  }];

  const definitions = [
    [{
      id: '0',
      text: `graphs ${HAS} G ${AND}${SO} G.nodes ${HAS} n`,
      add: {
        nodes: [
          findByText(nodes, 'n'),
        ],
      },
    }, {
      id: '01',
      text: `n.neighbors`,
    }, {
      id: '011',
      text: `G.edges.(${HAS} n) ${HAS} e`,
    }, {
      id: '0111',
      text: `n.neighbors = n.neighbors ${UNION} {e \\ n}`,
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
    }], [{
      id: '0',
      text: `graphs.tree ${HAS} G`,
    }, {
      id: '01',
      text: `graphs.connected ${HAS} G`,
    }, {
      id: '011',
      text: `graphs.${NOT}cyclic ${HAS} G`,
    }],
  ];

  return definitions;
};
