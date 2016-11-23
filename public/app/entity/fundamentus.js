var criarPapel = require('./papel');

var criarFundamentus = function() {
    var _key;
    var _key_papel;
    var _cotacao;
    var _p_l;
    var _p_vp;
    var _psr;
    var _div_yield;
    var _p_ativo;
    var _p_cap_giro;
    var _p_ebit;
    var _p_ativo_circ_liq;
    var _ev_ebit;
    var _mrg_ebit;
    var _mrg_liq;
    var _liq_corr;
    var _roic;
    var _roe;
    var _liq_2_meses;
    var _patrim_liq;
    var _div_brut_patrim;
    var _cresc_rec_5a;
    return {
        key: _key,
        key_papel: _key_papel,
        papel: criarPapel(),
        cotacao: _cotacao,
        p_l: _p_l,
        p_vp: _p_vp,
        psr: _psr,
        div_yield: _div_yield,
        p_ativo: _p_ativo,
        p_cap_giro: _p_cap_giro,
        p_ebit: _p_ebit,
        p_ativo_circ_liq: _p_ativo_circ_liq,
        ev_ebit: _ev_ebit,
        mrg_ebit: _mrg_ebit,
        mrg_liq: _mrg_liq,
        liq_corr: _liq_corr,
        roic: _roic,
        roe: _roe,
        liq_2_meses: _liq_2_meses,
        patrim_liq: _patrim_liq,
        div_brut_patrim: _div_brut_patrim,
        cresc_rec_5a: _cresc_rec_5a
    };
};

// var obj = criarFundamentus();
// obj.papel.papel = 'HGTX3';
// console.log(obj);


module.exports = criarFundamentus;
