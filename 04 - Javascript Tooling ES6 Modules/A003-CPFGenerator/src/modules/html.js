import GeraCPF from "./geraCPF";

const divCPFGerado = document.querySelector(".cpf-gerado");

const newCPF = new GeraCPF;
const cpfFormatted = `${newCPF.cpf.slice(0, 3)}.${newCPF.cpf.slice(3, 6)}.${newCPF.cpf.slice(6, 9)}-${newCPF.cpf.slice(9, 11)}`;

divCPFGerado.innerHTML = cpfFormatted;