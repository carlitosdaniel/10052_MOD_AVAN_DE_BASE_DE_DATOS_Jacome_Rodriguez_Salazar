/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.find()
    .skip((page - 1) * perPage)
    .limit(perPage)
    .then(animes => {
      Anime.countDocuments().then(count => {
        res.render('index', { animes, count, page });
      });
    })
    .catch(err => res.status(500).send('Error al obtener los animes de la base de datos'));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos'));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos'));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.countDocuments().then(count => {
    Anime.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .then(animes => {
        res.render('index', { animes, count, page: parseInt(page) });
      })
      .catch(err => res.status(500).send('Error al obtener los animes de la base de datos'));
  }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos'));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos'));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos'));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.countDocuments().then(count => {
    Anime.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .then(animes => {
        res.render('index', { animes, count, page: parseInt(page) });
      })
      .catch(err => res.status(500).send('Error al obtener los animes de la base de datos'));
  }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos'));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos'));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos'));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos'));
});

// Agregar datos a la base de datos
app.post('/animes', (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Ruta para renderizar el formulario de creación de nuevos animes
app.get('/animes/new', (req, res) => {
  res.render('new');
});

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.countDocuments().then(count => {
    Anime.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .then(animes => {
        res.render('index', { animes, count, page: parseInt(page) });
      })
      .catch(err => res.status(500).send('Error al obtener los animes de la base de datos: ' + err));
  }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos: ' + err));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos: ' + err));
});


app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos: ' + err));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos: ' + err));
});

// Agregar datos a la base de datos
app.post('/animes', (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos: ' + err));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27030/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Ruta para renderizar el formulario de creación de nuevos animes
app.get('/animes/new', (req, res) => {
  res.render('new');
});

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;
  const query = req.query.q;

  if (query && query.trim().length > 0 && /^\d+$/.test(query)) {
    Anime.find({ anime_id: query })
      .then(animes => {
        res.render('index', { animes, searchQuery: query, count: animes.length, page: 1 });
      })
      .catch(err => res.status(500).send('Error al buscar los animes en la base de datos: ' + err));
  } else {
    Anime.countDocuments().then(count => {
      Anime.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .then(animes => {
          res.render('index', { animes, count, page: parseInt(page), searchQuery: '' });
        })
        .catch(err => res.status(500).send('Error al obtener los animes de la base de datos: ' + err));
    }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos: ' + err));
  }
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos: ' + err));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos: ' + err));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos: ' + err));
});

// Agregar datos a la base de datos
app.post('/animes', (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos: ' + err));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});


