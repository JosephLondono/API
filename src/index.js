import express from 'express';
import morgan from 'morgan';
import countriesRouter from './routes/contries.js';
import usersRouter from './routes/users.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.set('json spaces', 2);

app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/countries', countriesRouter);
app.use('/user', usersRouter);

app.get('/', (req, res) => {
    res.json(documentacion);
    }
);

const documentacion = [
    {
        "ruta": "/countries",
        "metodo": "GET",
        "descripcion": "Devuelve un listado de todos los paises."
    },
    {
        "ruta": "/countries/:name",
        "metodo": "GET",
        "descripcion": "Devuelve un país en particular."
    },
];

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

