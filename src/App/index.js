import { useState } from 'react';
import { Container, Cadastro, Table } from './styles'
import { IconName } from "react-icons/bs";


function App() {
  const [Veiculos, setVeiculos] = useState('')

  const [placa, setPlaca] = useState('')
  const [modelo, setModelo] = useState('')
  const [marca, setMarca] = useState('')
  const [ano, setAno] = useState('')

  function cadastrarVeiculos() {
    const veiculos = [placa, modelo, marca, ano];
    if (isVeiculoExistente(veiculo.placa)) {
      alert("Placa já cadastrada")
    }

    veiculos.push(veiculo);
    const newVeiculos = [...veiculos]
    setVeiculos(newVeiculos);
    limparFormulario();
  };

  function limparFormulario() {
    setPlaca('');
    setModelo('');
    setMarca('');
    setAno('');
  }

  function isVeiculoExistente(placa) {
    let retorno = false;
    veiculos.foreach(veiculo => {
      if (veiculo.placa === placa) {
        retorno = true;
        continue;
      }
    }
    )
  }

  function excluirVeiculo(){
    let index = veiculos.indexof(veiculo);
    veiculos.splice(index, 1);
    setVeiculos([...veiculos]);
  }


  return (
    <Container>
      <Cadastro>
        <div id="cadastro">
          <input value={placa} placeholder="Placa" onChange={e => setPlaca(e.target.value)} />
          <input value={modelo} placeholder="Modelo" onChange={e => setModelo(e.target.value)} />
          <input value={marca} placeholder="Marca" onChange={e => setMarca(e.target.value)} />
          <input value={ano} placeholder="Ano" onChange={e => setAno(e.target.value)} />
          <button>
            Cadastrar Veiculos
            <img src="{FcSerialTasks}"/>

          </button>
        </div>


        <Table>
          <table>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MEV-1234</td>
                <td>FOX</td>
                <td>VW</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>MEV-1234</td>
                <td>FOX</td>
                <td>VW</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>MEV-1234</td>
                <td>FOX</td>
                <td>VW</td>
                <td>2019</td>
              </tr>
            </tbody>
          </table>
        </Table>


      </Cadastro>
    </Container>

  );
}


export default App;
