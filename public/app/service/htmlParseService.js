const http = require('http');
const auth = 'Basic ' + new Buffer('s203489:Cardoso1').toString('base64');
const url = 'www.fundamentus.com.br/resultado.php';
const fundamentus = require('../entity/fundamentus');
const cheerio = require('cheerio');
const daoFundamento = require('../dao/daoFundamento');

const options = {
    host: 'proxy3.trt18.jus.br',
    port: 80,
    method: 'GET',
    path: 'http://' + url,
    headers: {
        'Proxy-Authorization': auth,
        Host: url
    }
};

// Utility function that downloads a URL and invokes
// callback with the data.
function parseHTML(callback) {
    http.get(options, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            callback(data);
        });
    }).on('error', function() {
        callback(null);
    });
}


parseHTML(function(data) {
    if (data) {
        $ = cheerio.load(data);
        var papeis = $('td').toArray();
        var fundamento;
        var papeisFundamento = [];
        var count = 0;
        papeis.forEach((element) => {
            // console.log(element.children);      
            element.children.forEach((element_child) => {
                if (element_child.name == 'span') {
                    element_child.children.forEach((element_child_2) => {
                        element_child_2.children.forEach((element_child_3) => {
                            fundamento = fundamentus();
                            fundamento.papel = element_child_3.data;
                            papeisFundamento.push(fundamento);
                            count = 0;
                            // console.log(element_child_3.data);
                        });
                    });
                }
                if (element_child.data) {

                    switch (count) {
                        case 0:
                            fundamento.cotacao = element_child.data;
                            break;
                        case 1:
                            fundamento.p_l = element_child.data;
                            break;
                        case 2:
                            fundamento.p_vp = element_child.data;
                            break;
                        case 3:
                            fundamento.psr = element_child.data;
                            break;
                        case 4:
                            fundamento.div_yield = element_child.data;
                            break;
                        case 5:
                            fundamento.p_ativo = element_child.data;
                            break;
                        case 6:
                            fundamento.p_cap_giro = element_child.data;
                            break;
                        case 7:
                            fundamento.p_ebit = element_child.data;
                            break;
                        case 8:
                            fundamento.p_ativo_circ_liq = element_child.data;
                            break;
                        case 9:
                            fundamento.ev_ebit = element_child.data;
                            break;
                        case 10:
                            fundamento.mrg_ebit = element_child.data;
                            break;
                        case 11:
                            fundamento.mrg_liq = element_child.data;
                            break;
                        case 12:
                            fundamento.liq_corr = element_child.data;
                            break;
                        case 13:
                            fundamento.roic = element_child.data;
                            break;
                        case 14:
                            fundamento.roe = element_child.data;
                            break;
                        case 15:
                            fundamento.liq_2_meses = element_child.data;
                            break;
                        case 16:
                            fundamento.patrim_liq = element_child.data;
                            break;
                        case 17:
                            fundamento.div_brut_patrim = element_child.data;
                            break;
                        case 18:
                            fundamento.cresc_rec_5a = element_child.data;
                            break;
                        default:
                            break;
                    }

                    // console.log(count, element_child.data);
                    count++;
                }
            });
        });

        daoFundamento.save(papeisFundamento, (err, result) => {
            console.log('Cadastrado com sucesso ', result.length);

        });

        // papeisFundamento.forEach((element)=>{
        //    console.log(element);
        //    });
    } else console.log('error');
});
