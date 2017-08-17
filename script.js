var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://1.fwcdn.pl/ph/69/69/396969/203223_2.1.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'http://samequizy.pl/wp-content/uploads/2015/09/filing_images_5072c8c117ef.jpg'
    },
    {
        id: 3,
        title: 'Game of Thrones',
        desc: 'Serial o wlace o tron:)',
        img: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/55977545/thrones-hardhome.0.0.jpg'
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        titleX: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.titleX)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var MovieImage = React.createClass({
    propTypes: {
        src: React.PropTypes.string
    },

    render: function() {
        return (
            React.createElement('img', {src: this.props.src, className: "image"})
        )
    }
});

var Movie = React.createClass({
  propTypes: {
    movieX: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {titleX: this.props.movieX.title}),
        React.createElement(MovieDescription, {desc: this.props.movieX.desc}),
        React.createElement(MovieImage, {src: this.props.movieX.img})
      )
    )
  },
});

var MovieList = React.createClass({
  propTypes: {
    moviesX: React.PropTypes.array.isRequired,
  },

  render: function() {
    var moviesElements = this.props.moviesX.map(function(movie) {
        return React.createElement(Movie, {movieX: movie, key: movie.id})
    });

    return (
      React.createElement('ul', {}, moviesElements)
      )
  },
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MovieList, {moviesX: movies})
  );
ReactDOM.render(element, document.getElementById('app'));