import React, { useState } from "react";


const Home = () => {
	const [ligthRed, setLigthRed] = useState(" ")
	const [ligthYellow, setLigthYellow] = useState(" ")
	const [ligthGreen, setLigthGreen] = useState(" ")
	const [Violeta, setVioleta] = useState(" ")

	function selectRed() {
		if (ligthRed == "ligthRed") {
			setLigthRed(" ");
		} else {
			setLigthRed("ligthRed")
			setLigthYellow(" ")
			setLigthGreen(" ")
		}
	}
	function selectYellow() {
		if (ligthYellow == "ligthYellow") {
			setLigthYellow(" ")
		} else {
			setLigthYellow("ligthYellow")
			setLigthRed(" ");
			setLigthGreen(" ")
		}

	}
	function selectGreen() {
		if (ligthGreen == "ligthGreen") {
			setLigthGreen(" ")
		} else {
			setLigthGreen("ligthGreen")
			setLigthRed(" ");
			setLigthYellow(" ")
		}
	}
	function todoVioleta() {
		if (Violeta == "semaforosVioleta") {
			setVioleta(" ")
		} else {
			setVioleta("semaforosVioleta")
			setLigthGreen(" ")
			setLigthRed(" ");
			setLigthYellow(" ")
		}
	}

	function automatico () {
		let numeroAzar = Math.floor(Math.random()*3+1)
		if (numeroAzar==1) {
			selectRed()
		} else if (numeroAzar==2){
			selectYellow()
		} else {
			selectGreen()
		}
		console.log(numeroAzar)
	}

	return (
		<div className="container flex justify-content-center">
			<div className="bg-black text-center col-1 poste mx-auto ">
			</div>
			<div className="bg-black col-2 p-1 rounded semaforo mx-auto ">
				<div className={"rounded-circle bg-danger m-1 p-2 largo " + ligthRed + Violeta} onClick={selectRed} ></div>
				<div className={"rounded-circle bg-warning m-1 p-2 largo " + ligthYellow + Violeta } onClick={selectYellow}></div>
				<div className={"rounded-circle bg-success m-1 p-2 largo " + ligthGreen + Violeta} onClick={selectGreen}></div>
			</div>
			<button className="btn botonAutomatico" onClick={automatico}> Automatico </button>
			<button className="btn botonVioleta " onClick={todoVioleta}> Violeta </button>
		</div>
	);
};

export default Home;
