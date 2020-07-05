const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

require('./models/home');
const Home = mongoose.model('Home');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});

app.use(
    '/file',
    express.static(path.resolve(__dirname, 'tmp', 'uploads'))
)

mongoose.connect('mongodb://localhost/celke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso");
}).catch((err) => {
    console.log("Erro: Conexão com o MongoDB não realizada " + err);
});

app.get('/home', function (req, res) {

    Home.findOne({}).then((home) => {

        if (home.portUmFileName) {
            var portUmFileName = "http://localhost:8080/file/home/" + home.portUmFileName;
        } else {
            var portUmFileName = "http://localhost:8080/file/home/portfolio.jpg";
        }

        if (home.portDoisFileName) {
            var portDoisFileName = "http://localhost:8080/file/home/" + home.portDoisFileName;
        } else {
            var portDoisFileName = "http://localhost:8080/file/home/portfolio.jpg";
        }

        if (home.portTresFileName) {
            var portTresFileName = "http://localhost:8080/file/home/" + home.portTresFileName;
        } else {
            var portTresFileName = "http://localhost:8080/file/home/portfolio.jpg";
        }

        if (home.portQuatroFileName) {
            var portQuatroFileName = "http://localhost:8080/file/home/" + home.portQuatroFileName;
        } else {
            var portQuatroFileName = "http://localhost:8080/file/home/portfolio.jpg";
        }

        if (home.portCincoFileName) {
            var portCincoFileName = "http://localhost:8080/file/home/" + home.portCincoFileName;
        } else {
            var portCincoFileName = "http://localhost:8080/file/home/portfolio.jpg";
        }

        if (home.portSeisFileName) {
            var portSeisFileName = "http://localhost:8080/file/home/" + home.portSeisFileName;
        } else {
            var portSeisFileName = "http://localhost:8080/file/home/portfolio.jpg";
        }

        return res.json({
            home,
            portUmFileName,
            portDoisFileName,
            portTresFileName,
            portQuatroFileName,
            portCincoFileName,
            portSeisFileName
        });

    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado"
        });
    });
});


app.get('/homeapp', function (req, res) {

    Home.findOne({}, '_id portUmFileName portUmTitulo portUmSubtitulo portDoisFileName portDoisTitulo portDoisSubtitulo portTresFileName portTresTitulo portTresSubtitulo portQuatroFileName portQuatroTitulo portQuatroSubtitulo portCincoFileName portCincoTitulo portCincoSubtitulo portSeisFileName portSeisTitulo portSeisSubtitulo').then((home) => {

        if (home.portUmFileName) {
            var portUmFileName = "http://192.168.1.85:8080/file/home/" + home.portUmFileName;
        } else {
            var portUmFileName = "http://192.168.1.85:8080/file/home/portfolio.jpg";
        }

        if (home.portDoisFileName) {
            var portDoisFileName = "http://192.168.1.85:8080/file/home/" + home.portDoisFileName;
        } else {
            var portDoisFileName = "http://192.168.1.85:8080/file/home/portfolio.jpg";
        }

        if (home.portTresFileName) {
            var portTresFileName = "http://192.168.1.85:8080/file/home/" + home.portTresFileName;
        } else {
            var portTresFileName = "http://192.168.1.85:8080/file/home/portfolio.jpg";
        }

        if (home.portQuatroFileName) {
            var portQuatroFileName = "http://192.168.1.85:8080/file/home/" + home.portQuatroFileName;
        } else {
            var portQuatroFileName = "http://192.168.1.85:8080/file/home/portfolio.jpg";
        }

        if (home.portCincoFileName) {
            var portCincoFileName = "http://192.168.1.85:8080/file/home/" + home.portCincoFileName;
        } else {
            var portCincoFileName = "http://192.168.1.85:8080/file/home/portfolio.jpg";
        }

        if (home.portSeisFileName) {
            var portSeisFileName = "http://192.168.1.85:8080/file/home/" + home.portSeisFileName;
        } else {
            var portSeisFileName = "http://192.168.1.85:8080/file/home/portfolio.jpg";
        }

        const { portUmTitulo, portUmSubtitulo, portDoisTitulo, portDoisSubtitulo, portTresTitulo, portTresSubtitulo, portQuatroTitulo, portQuatroSubtitulo, portCincoTitulo, portCincoSubtitulo, portSeisTitulo, portSeisSubtitulo } = home;

        return res.json({
            portUmTitulo,
            portUmSubtitulo,
            portDoisTitulo,
            portDoisSubtitulo,
            portTresTitulo,
            portTresSubtitulo,
            portQuatroTitulo,
            portQuatroSubtitulo,
            portCincoTitulo,
            portCincoSubtitulo,
            portSeisTitulo,
            portSeisSubtitulo,
            portUmFileName,
            portDoisFileName,
            portTresFileName,
            portQuatroFileName,
            portCincoFileName,
            portSeisFileName
        });

    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado"
        });
    });
});



app.post('/home', async function (req, res) {

    const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextBtn": "ENTRE EM CONTATO",
        "topLinkBtn": "http://localhost:3000/",

        "servTitulo": "Serviços",
        "servSubtitulo": "Featured content or information",

        "servUmIcone": "code",
        "servUmTitulo": "Serviço 1",
        "servUmDesc": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",

        "servDoisIcone": "laptop-code",
        "servDoisTitulo": "Serviço 2",
        "servDoisDesc": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",

        "servTresIcone": "mobile-alt",
        "servTresTitulo": "Serviço 3",
        "servTresDesc": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",

        "portTitulo": "Portfólio",
        "portSubtitulo": "Featured content or information.",

        "portUmOriginalName": "portfolio_um.jpg",
        "portUmFileName": "portfolio_um.jpg",
        "portUmTitulo": "Card title",
        "portUmSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portDoisOriginalName": "portfolio_dois.jpg",
        "portDoisFileName": "portfolio_dois.jpg",
        "portDoisTitulo": "Card title",
        "portDoisSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portTresOriginalName": "portfolio_tres.jpg",
        "portTresFileName": "portfolio_tres.jpg",
        "portTresTitulo": "Card title",
        "portTresSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portQuatroOriginalName": "portfolio_quatro.jpg",
        "portQuatroFileName": "portfolio_quatro.jpg",
        "portQuatroTitulo": "Card title",
        "portQuatroSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portCincoOriginalName": "portfolio_cinco.jpg",
        "portCincoFileName": "portfolio_cinco.jpg",
        "portCincoTitulo": "Card title",
        "portCincoSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portSeisOriginalName": "portfolio_seis.jpg",
        "portSeisFileName": "portfolio_seis.jpg",
        "portSeisTitulo": "Card title",
        "portSeisSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    };

    const homeExiste = await Home.findOne({});
    if (homeExiste) {
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro."
        })
    }

    Home.create(dados, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página home não cadastrado"
        });
    });

    return res.json({
        error: true,
        message: "Conteúdo da página home cadastrado com sucesso"
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://locahost:8080");
});