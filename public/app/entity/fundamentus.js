var criarFundamentus = function(){
	var _papel;
	var _cotacao;
	var _p_l;
	var _p_vp
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
		papel: _papel,
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
	}
}

// Papel	Cotação	P/L	P/VP	PSR	Div.Yield	P/Ativo	P/Cap.Giro	P/EBIT	P/Ativ Circ.Liq	EV/EBIT	Mrg Ebit	Mrg. Líq.	Liq. Corr.	ROIC	ROE	Liq.2meses	Patrim. Líq	Dív.Brut/ Patrim.	Cresc. Rec.5a
// MNSA4	0,47	0,00	0,00	0,000	0,00%	0,000	0,00	0,00	0,00	0,00	-208,15%	-362,66%	3,63	-13,50%	145,70%	0,00	-9.105.000,00	-6,52	-41,11%

// var obj = criarFundamentus();
// obj.papel = 'asdf';
// console.log(obj);

module.exports = criarFundamentus;