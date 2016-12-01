var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
    };
  },

  onButtonSubmit: function () {
    e.preventDefault();

    var name = this.refs.name.value;

    alert(name);
  },

  render: function () {
    var name = this.props.name;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>This is from a component</p>

        <form onSubmit={this.onButtonSubmit}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  },
});

var firstName = 'Al';

ReactDOM.render(
  <Greeter naem={firstName} message="Hello from a component" />,
  document.getElementById('app')
);
