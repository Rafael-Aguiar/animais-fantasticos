export default function initFuncionamento() {


  
} 

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horaAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
const horarioAberto = (horaAgora >= horarioSemana[0] && horaAgora <= horarioSemana[1]);

if (semanaAberto && horarioAberto) {
  funcionamento.classList.remove('fechado');
  funcionamento.classList.add('aberto');
}
else {
  funcionamento.classList.remove('aberto');
  funcionamento.classList.add('fechado');
}

