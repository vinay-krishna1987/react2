

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
]);



console.log(parent);



const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(parent);


